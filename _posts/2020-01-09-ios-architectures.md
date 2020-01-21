---
layout: post
title: iOS Architectures
date: 2020-01-08 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

*Note: The code in this article has been written for the new SceneDelegate in iOS13. If you're refactoring a legacy application all the code that we write inside "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)" needs to be moved to the corresponding AppDelegate file inside "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool".*

Apple development has, for a long time, followed the Apple dictated guideline of using the MVC paradigm of Model/View/Controller. This has been the de facto standard since the introduction of the AppStore and iOS SDK in 2008.

As time progressed and apps grew in size and features scaling MVC up became problematic. For that reason many different solutions that promise to solve all the problems with MVC have risen up, and with them strong advocates praising one solution over the other. This is not going to be one of those articles where I rise one up and declare the rest to be useless.

We are going to analyze the most popular choices we have for iOS Development in 2020. This is not going to be a list of all the possible architecture for an iOS application, but only of what I consider relevant today in the industry.

## MVVM-C
Model/ViewModel/Coordinator

                    Coordinator
                        |
                        V
ViewController <-> ViewModel -> DataManager/Repository/NetworkService



Reactive programming on iOS is mostly done through RxSwift. During 2019 WWDC Apple introduced SwiftUI and Combine which with time will become a good alternative, but at the moment they're still not mature enough to be used espacially considering the iOS13+ requirement.

Since we're focusing on the architecture here I'll be showing a simpler model using callbacks instead of bindings, but the process is the same.

On top of everything we have a coordinator that handles the navigation flow for a certain feature.

First we create the AppCoordinator. This will be the main coordinator for the application and will handle routing to the root screens of the app (for example the login screen if not authenticated and the logged in screen otherwise).

```
import UIKit

final class AppCoordinator {
    let window: UIWindow?

    lazy var rootViewController: UINavigationController = {//1
        return UINavigationController(rootViewController: UIViewController())
    }()

    var childCoordinator: UserCoordinator?//2

    init(window: UIWindow?) {
        self.window = window
    }

    func start() {
        guard let window = window else {
            return
        }

        window.rootViewController = rootViewController//3
        window.makeKeyAndVisible()

        addUserCoordinator()//4
    }

    func addUserCoordinator() {
        childCoordinator = UserCoordinator(rootViewController: rootViewController)
        childCoordinator?.start()
    }

}
```

1. We set a newly created navigationController as the rootViewController of the window.
2. We hold a strong reference to the coordinator currently in use as child. In this case we only have the UserCoordinator, but in case it could be multiple we can use a protocol or a superclass depending on the application. Most tutorials have a generic array of childCoordinators here, but this is a premature generalization. You may need it in your app or you may not. If you know that it will always be a UserCoordinator and nothing else there is no point doing that. If in the future it will change you can always go back and refactor it. The key to clean code is to always go back and take time to refactor things that need refactor due to changes. Do not optimize prematurely if it is not needed.
3. We set the navigationController as the root of our window.
4. We initialize the user coordinator by calling start().

Open SceneDelegate and add a strong reference to the AppCoordinator.

```
class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    var appCoordinator: AppCoordinator!

Inside "willConnectTo" initialize the AppCoordinator and start it:

        if let windowScene = scene as? UIWindowScene {
            let window = UIWindow(windowScene: windowScene)
            appCoordinator = AppCoordinator(window: window)
            appCoordinator.start()
        }
```

The UserCoordinator is responsible to instantiate the correct viewController and to inject the right dependencies into it.

```
import UIKit

final class UserCoordinator {
    init(rootViewController: UINavigationController) {
        self.rootViewController = rootViewController
    }

    let rootViewController: UINavigationController

    func start() {
        //TODO: Add controller and inject dependencies
    }
}
```

Before proceeding we need to create the underlying classes we will need for the controller. Our model is a simple struct, it may be a class if we need persistance like Realm or Core Data.

```
struct User {
    let id: String
    let name: String
}
```

We can now create the viewModel that will handle all the business logic and communicate back to the controller:

```
import UIKit

class UserViewModel {
    init(coordinatorDelegate: UserCoordinator? = nil, model: User? = nil, updateTextLabel: UserViewModel.UserLabelUpdating? = nil) {
        self.coordinatorDelegate = coordinatorDelegate
        self.model = model
        self.updateTextLabel = updateTextLabel
    }

    weak var coordinatorDelegate: UserCoordinator?

    var model: User?
    var updateTextLabel: UserLabelUpdating?

    typealias UserLabelUpdating = (String?) -> Void

    //MARK: Data Loading

    func loadUser() {
        //load data
        let user = User(id: "w", name: "Mark")
        self.model = user
        updateTextLabel?(user.name)
    }
}
```

Notice again how we are using callbacks and not delegates to dispatch the result to the controller. If you used standard MVVM you would have RxSwift to expose a stream of events instead of callbacks.

We are also keeping a weak reference to the coordinator since we need it if we want to change screen.

We can now focus on the Controller. Since we don't care about the UI (the focus here is only on the architecture) I will create the controller from code without AutoLayout. This is obviously something you should never do in any kind of application.

```
import UIKit

final class UserViewController: UIViewController {

     init(viewModel: UserViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("coder: init not supported")
    }

    let viewModel: UserViewModel
}
```

This way we have easy dependency injection of the viewModel. We initialize all the views from code, but obviously they can be created however you like.

```
weak var label: UILabel?
    weak var button: UIButton?
    weak var nextButton: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Detail"

        view.backgroundColor = UIColor.white

        setupLabel()
        setupCancelButton()
        setupDetailButton()
        setupNextButton()

        reloadAction()
    }


    @objc func reloadAction() {
    }

    @objc func showDetail() {
    }

    @objc func pushNext() {
    }

    private func setupLabel() {
        let label = UILabel(frame: CGRect(x: 0, y: 250, width: 350, height: 55))
        label.textAlignment = .center
        label.textColor = UIColor.black
        view.addSubview(label)
        self.label = label
    }

    private func setupCancelButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 350, width: 350, height: 55))
        button.setTitle("Reload", for: .normal)
        button.setTitleColor(.black, for: .normal)
        button.addTarget(self, action: #selector(reloadAction), for: .touchUpInside)
        view.addSubview(button)
        self.button = button
    }

    private func setupDetailButton() {
        let button = UIBarButtonItem(title: "Detail", style: .plain, target: self, action: #selector(showDetail))
        navigationItem.setRightBarButton(button, animated: false)
    }

    private func setupNextButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 450, width: 350, height: 55))
        button.setTitle("Next", for: .normal)
        button.setTitleColor(.red, for: .normal)
        button.addTarget(self, action: #selector(pushNext), for: .touchUpInside)
        view.addSubview(button)
        self.nextButton = button
    }
}
```

And bind it to the viewModel:

```
    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Detail"

        view.backgroundColor = UIColor.white

        setupLabel()
        setupCancelButton()
        setupDetailButton()
        setupNextButton()

        //bind
        viewModel.updateTextLabel = { (username) in
            self.label?.text = username
        }

        reloadAction()
    }


    @objc func reloadAction() {
        viewModel.loadUser()
    }
```

Update the start method of the UserController to instantiate the UserViewController:

```
    func start() {
        let viewModel = UserViewModel()
        viewModel.coordinatorDelegate = self

        let vc = UserViewController(viewModel: viewModel)
        rootViewController.setViewControllers([vc], animated: false)
    }
```

If you run the application the label gets populated with username.

We can now add a way to navigate to different screens. To do that the viewModel needs to communicate to the coordinator about the user's intent.

Update the viewModel with the actions to navigate to a different screen:

```
    func showDetail() {
        coordinatorDelegate?.goToDetail(withItem: self)
    }

    func pushNext() {
        coordinatorDelegate?.pushNext(withModel: self)
    }

Update the controller to add a callback to the viewModel for each action:

    @objc func showDetail() {
        viewModel.showDetail()
    }

    @objc func pushNext() {
        viewModel.pushNext()
    }
```

Finally we update the coordinator with the code to navigate to the final screen:

```
import UIKit

final class UserCoordinator {
    init(rootViewController: UINavigationController) {
        self.rootViewController = rootViewController
    }

    let rootViewController: UINavigationController

    func start() {
        let viewModel = UserViewModel()
        viewModel.coordinatorDelegate = self

        let vc = UserViewController(viewModel: viewModel)
        rootViewController.setViewControllers([vc], animated: false)
    }

    func pushNext(withModel model: UserViewModel) {
        let vc = UserViewController(viewModel: model)
        rootViewController.pushViewController(vc, animated: true)
    }
}
```

`Push next` is straightforward since we are just pushing the same controller. It is a continuation of the same flow so we do not need a new coordinator for it. On the other hand the detail screen might start a new navigation flow so we need a different coordinator to handle it:

```
import UIKit

final class UserCoordinator {
    init(rootViewController: UINavigationController) {
        self.rootViewController = rootViewController
    }

    let rootViewController: UINavigationController

    var detailCoordinator: UserDetailCoordinator?

    func start() {
        let viewModel = UserViewModel()
        viewModel.coordinatorDelegate = self

        let vc = UserViewController(viewModel: viewModel)
        rootViewController.setViewControllers([vc], animated: false)
    }

    func pushNext(withModel model: UserViewModel) {
        let vc = UserViewController(viewModel: model)
        rootViewController.pushViewController(vc, animated: true)
    }

    //MARK: Detail

    func goToDetail(withItem item: UserViewModel) {
        detailCoordinator = UserDetailCoordinator(finishHandler: finish)
        detailCoordinator?.start(on: rootViewController, withModel: item)
    }

    func finish() {
        detailCoordinator = nil
    }
}
```

Same as in the AppCoordinator we add a strong reference to the child and we add a method to start it. We also need to have a callback when the pop the DetailCoordinator and are back to the UserCoordinator so that we zero the reference otherwise we will keep the strong reference in memory forever. We can also use this callback if we need to do some actions on pop, but this is not the case.

```
import UIKit

final class UserDetailCoordinator {
    init(finishHandler: @escaping UserDetailCoordinator.Finish) {
        self.finishHandler = finishHandler
    }

    weak var presentedController: UIViewController?

    typealias Finish = () -> Void
    let finishHandler: Finish

    func start(on rootController: UIViewController, withModel model: UserViewModel) {
        let viewModel = UserDetailViewModel(coordinatorDelegate: nil, model: model.model, updateTextLabel: nil)
        viewModel.detailCoordinatorDelegate = self

        let vc = UserDetailViewController(viewModel: viewModel)
        vc.isModalInPresentation = true //Required for iOS13
        rootController.present(vc, animated: true, completion: nil)

        presentedController = vc
    }

    func dismiss() {
        presentedController?.dismiss(animated: true, completion: nil)

        presentedController = nil

        finishHandler()
    }
}
```

This is pretty much the same as in the UserCoordinator. We instantiated our dependencies, we inject them in the controller and we present the controller.
On dismissal we dismiss the controller and call the handler to clean up.

In the same way the UserDetailController and UserDetailViewModel are similar.

```
import UIKit

final class UserDetailViewController: UIViewController {

     init(viewModel: UserDetailViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("coder: init not supported")
    }

    var viewModel: UserDetailViewModel

    weak var label: UILabel?
    weak var button: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Detail"

        view.backgroundColor = UIColor.white
        setupLabel()
        setupCancelButton()

        //bind
        viewModel.updateTextLabel = { (username) in
            self.label?.text = "Detail - \(username)"
        }

        viewModel.loadUser()
    }


    @objc func dismissAction() {
        viewModel.dismiss()
    }

    private func setupLabel() {
        let label = UILabel(frame: CGRect(x: 0, y: 250, width: 350, height: 55))
        label.textAlignment = .center
        label.textColor = UIColor.black
        view.addSubview(label)
        self.label = label
    }

    private func setupCancelButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 350, width: 350, height: 55))
        button.setTitle("Dismiss", for: .normal)
        button.setTitleColor(.black, for: .normal)
        button.addTarget(self, action: #selector(dismissAction), for: .touchUpInside)
        view.addSubview(button)
        self.button = button
    }
}


final class UserDetailViewModel: UserViewModel {

    weak var detailCoordinatorDelegate: UserDetailCoordinator?

    func dismiss() {
        detailCoordinatorDelegate?.dismiss()
    }

}
```

You can find the full project on [Github][1].

## VIPER

        Wireframe
            |
            V
View <-> Presenter -> Interactor -> DataManager/Repository/NetworkService


If your app is really complicated VIPER gives you a clear separation of responsibilities. The offside is having to maintain a lot of files for each screen.

Create the AppWireframe in the SceneDelegate and keep a strong reference to it so it does not get deallocated:

```
class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?
    var wireframe = AppWireframe()
```
Inside willConnectTo instantiate the wireframe and start it:

```
if let windowScene = scene as? UIWindowScene {
            let window = UIWindow(windowScene: windowScene)
            self.window = window
            wireframe.initialize(on: window)
        }
```

The AppWireframe will start the BaseWireframe of the app for the current start and start it:

```
import UIKit

final class AppWireframe {
    var rootWireframe = CountWireframe()

    func initialize(on window: UIWindow) {
        let nav = UINavigationController()
        window.rootViewController = nav
        window.makeKeyAndVisible()
        rootWireframe.presentRootController(on: nav)
    }

    func getNavigationController(from window: UIWindow) -> UINavigationController {
        guard let navigationController = window.rootViewController as? UINavigationController else {
            fatalError()
        }
        return navigationController
    }
}
```

The CountWireframe will initialize all the dependecies and present the viewController (which we will call the view from now on).

```
import UIKit

final class CountWireframe {
    weak var appWireframe: AppWireframe?

    weak var navigationController: UINavigationController?

    func presentRootController(on nav: UINavigationController) {
        self.navigationController = nav

        let interactor = CountInteractor()
        let presenter = CountPresenter(wireframe: self, interactor: interactor)
        let vc = CountViewController(eventHandler: presenter)

        nav.viewControllers = [vc]
    }
}
```

We can now start from the right and move towards the left of the chart. Starting with the Model and DataManager/Repository:

```
struct CountItem {
    let count: String
}



final class CountDataManager {
    private lazy var count: [CountItem] = {
        loadData()
    }()

    private func loadData() -> [CountItem] {
        return ["First", "Second", "Third"].map{ CountItem(count: $0) }
    }

    func findItems() -> [CountItem] {
        return count
    }

    func findItem(withIndex index: Int) -> CountItem? {
        guard index < count.count else {
            return nil
        }
        return count[index]
    }
}
```

Not much going on here. In the interactor we have the business logic and it acts as a middleman between the presenter and the DataManager:

```
final class CountInteractor {
    let dataManager: CountDataManager = CountDataManager()
    weak var output: CountPresenter?

    func findItem(withIndex index: Int) {
        guard let item = getItem(withIndex: index) else {
            assertionFailure()
            return
        }
        output?.foundItem(item: item)
    }

    private func getItem(withIndex index: Int) -> CountItemViewModel? {
        guard let item = dataManager.findItem(withIndex: index) else {
            return nil
        }
        let mapped = CountItemViewModel(item: item)
        return mapped
    }
}
```

We get the items, convert it to viewModels and pass them to the presenter.

Next we create the presenter that handles user interactions and dispatches events to the interactor or to the wireframe:

```
final class CountPresenter {
    init(wireframe: CountWireframe, interactor: CountInteractor) {
        self.wireframe = wireframe
        self.interactor = interactor
        interactor.output = self
    }

    weak var wireframe: CountWireframe?
    weak var userInterface: CountViewInterface?
    let interactor: CountInteractor

    var index = 0
    var currentItem: CountItemViewModel?

    //MARK: Input

    func loadData() {
        interactor.findItem(withIndex: index)
    }

    //MARK: Output

    func foundItem(item: CountItemViewModel) {
        self.currentItem = item

        userInterface?.setTitle(title: item.title)
        userInterface?.setMessage(message: item.message)
    }
}
```

We can now create the protocol for the view:

```
protocol CountViewInterface: class {
    func setTitle(title: String)
    func setMessage(message: String)
}
```

Finally it is time for the view (viewController). We first set up the initializer:

```
final class CountViewController: UIViewController {

    let eventHandler: CountPresenter

    weak var titleLabel: UILabel?
    weak var label: UILabel?
    weak var nextButton: UIButton?

    init(eventHandler: CountPresenter) {
        self.eventHandler = eventHandler
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError("coder: init not supported")
    }
}
```

Now we setup the views:

```
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .white

        setupTitleLabel()
        setupLabel()
        setupDetailButton()
        setupNextButton()

    }

    @objc func showDetail() {
    }
    @objc func showNext() {
    }


    private func setupTitleLabel() {
     let label = UILabel(frame: CGRect(x: 0, y: 150, width: 350, height: 55))
     label.textAlignment = .center
     label.textColor = .red
     view.addSubview(label)
     self.titleLabel = label
    }
    private func setupLabel() {
        let label = UILabel(frame: CGRect(x: 0, y: 250, width: 350, height: 55))
        label.textAlignment = .center
        label.textColor = .red
        view.addSubview(label)
        self.label = label
    }
     private func setupDetailButton() {
         let button = UIBarButtonItem(title: "Detail", style: .plain, target: self, action: #selector(showDetail))
         navigationItem.setRightBarButton(button, animated: false)
     }
    private func setupNextButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 350, width: 350, height: 55))
        button.setTitle("Next", for: .normal)
        button.setTitleColor(.red, for: .normal)
        button.addTarget(self, action: #selector(showNext), for: .touchUpInside)
        view.addSubview(button)
        self.nextButton = button
    }
}
```

Next we link the actions to the presenter:

```
    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = .white

        setupTitleLabel()
        setupLabel()
        setupDetailButton()
        setupNextButton()

        eventHandler.loadData()
    }

    @objc func showDetail() {
        //TODO
    }
    @objc func showNext() {
        //TODO
    }
```

Finally we implement the interface:

```
extension CountViewController: CountViewInterface {
    func setTitle(title: String) {
        titleLabel?.text = title
    }

    func setMessage(message: String) {
        label?.text = message
    }
}
```

Now let's talk routing. We first need to dispatch the event from the view (viewController):

```
    @objc func showDetail() {
        eventHandler.showDetail()
    }
    @objc func showNext() {
        eventHandler.showNext()
    }
```

In the Presenter after foundItem we add:

```
    func foundNextItem(item: CountItemViewModel) {
        wireframe?.pushNext(withItem: item, index: index + 1)
    }

    //MARK: Navigation

    func showNext() {
        interactor.findNextItem(currentIndex: index)
    }

    func showDetail() {
        guard let currentItem = currentItem else {
            assertionFailure()
            return
        }
        wireframe?.presentDetail(withItem: currentItem)
    }
```

In the interactor again after findItem we add:

```
    func findNextItem(currentIndex: Int) {
        guard let item = getItem(withIndex: currentIndex + 1) else {
            //TODO: Show error last page reached
            return
        }
        output?.foundNextItem(item: item)
    }
```

Finally we can tackle the wireframe. Add a property to CountWireframe pointing at the detail wireframe:

```
final class CountWireframe {
    var detailWireframe: DetailWireframe?
```

And add the methods to present the detail wireframe or push a new controller to the navigation stack.

```
    func presentDetail(withItem item: CountItemViewModel) {
        detailWireframe = DetailWireframe(finishHandler: finish)
        guard let navigationController = navigationController else {
            assertionFailure()
            return
        }
        detailWireframe?.presentDetail(from: navigationController, withItem: item)
    }

    func pushNext(withItem item: CountItemViewModel, index: Int) {
        guard index > 0 else {
            assertionFailure()
            return
        }

        let interactor = CountInteractor()
        let presenter = CountPresenter(wireframe: self, interactor: interactor)
        let vc = CountViewController(eventHandler: presenter)
        presenter.userInterface = vc

        presenter.index = index
        presenter.foundItem(item: item)

        navigationController?.pushViewController(vc, animated: true)
    }


    func finish() {
        detailWireframe = nil
    }
}
```

Note: In this example the next screen is the same screen as the current screen. In a real application the Wireframe only handles navigation for one view. In that case pushNext will push a different view so that needs to be a separate Wireframe as well.

We can now create the detail screen starting again with the wireframe:

```
import UIKit

final class DetailWireframe {
    init(finishHandler: @escaping Finish) {
        self.finishHandler = finishHandler
    }

    weak var presentedController: UIViewController?

    typealias Finish = () -> Void
    let finishHandler: Finish

    func presentDetail(from source: UIViewController, withItem item: CountItemViewModel) {
        let presenter = DetailPresenter(wireframe: self, item: item)
        let detail = DetailViewController(eventHandler: presenter)
        presenter.userInterface = detail

        presenter.populateView()

        detail.isModalInPresentation = true
        source.present(detail, animated: true)
        presentedController = detail
    }

    func dismissDetail() {
        presentedController?.dismiss(animated: true)

        finishHandler()
    }

}
```

In this case we do not need an interactor since we already have the model object and the deatil screen is only showing it and not acting on it (editing or adding) so we only need to create the presenter and the view.

```
final class DetailPresenter {
    init(wireframe: DetailWireframe, item: CountItemViewModel) {
        self.wireframe = wireframe
        self.item = item
    }

    weak var wireframe: DetailWireframe?
    weak var userInterface: DetailViewInterface?

    let item: CountItemViewModel

    func populateView() {
        userInterface?.setMessage(message: item.message)
    }

    func dismiss() {
        wireframe?.dismissDetail()
    }
}
```

Since the model does not change it can also be injected as a dependency.

The protocol for the view is really simple:

```
protocol DetailViewInterface: class {
    func setMessage(message: String)
}
```

And likewise the view itself:

```
import UIKit

final class DetailViewController: UIViewController {

    let eventHandler: DetailPresenter

    weak var label: UILabel?
    weak var button: UIButton?

    init(eventHandler: DetailPresenter) {
       self.eventHandler = eventHandler
       super.init(nibName: nil, bundle: nil)
   }

   required init?(coder: NSCoder) {
       fatalError("coder: init not supported")
   }

    override func viewDidLoad() {
        super.viewDidLoad()

        title = "Detail"

        view.backgroundColor = UIColor.blue
        setupLabel()
        setupCancelButton()

        eventHandler.loadData()
    }


    @objc func dismissAction() {
        eventHandler.dismiss()
    }

    private func setupLabel() {
        let label = UILabel(frame: CGRect(x: 0, y: 250, width: 350, height: 55))
        label.textAlignment = .center
        label.textColor = UIColor.white
        view.addSubview(label)
        self.label = label
    }

    private func setupCancelButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 350, width: 350, height: 55))
        button.setTitle("Cancel", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.addTarget(self, action: #selector(dismissAction), for: .touchUpInside)
        view.addSubview(button)
        self.button = button
    }
}
```

Finally we implement the protocol:

```
extension DetailViewController: DetailViewInterface {
    func setMessage(message: String) {
        label?.text = message
    }
}
```

Note how most of the view's code in both cases is set up the various subviews and link the actions that the user can perform. That's the whole range of responsibilities of the view. The presenter will convert that user intent to an action to dispatch to either the interactor or the wireframe and those two will act.

You can find the full project on [Github][1].

## MVP-R [Coming Soon]

<!--

MVP is the simplest one of the alternatives (exclusing MVC), its biggest issue is not providing routing capabilities so the Presenter on top of handling User Interaction and communicating with the netork service/persistance layer has to handle the navigation flow as well. With the addition of a Router we solve this problem.

The ViewController acts as a view that gets esposed to the presenter as a protocol (as it happens in VIPER). The Presenter handles the business logic and dispatches the changes back to the view (controller) for display. The router handles the navigation.

 TODO 
 
 -->

## MVC [Coming Soon]

<!-- TODO -->

## What should I use?

You should not just use one architecture and stick with it no matter what. What architecture to use depends heavily on what kind of application you're building and what it is trying to do.

An application that shows a couple of screens from a JSON request is completely different from an application that handles a social networking application with user login, registration, front page, timeline, private messaging, ...

Getting so stuck with one architecture and using it everywhere indiscriminately means fitting a round peg in a square hole.
