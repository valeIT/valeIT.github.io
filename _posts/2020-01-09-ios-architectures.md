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

You can find the full project on [Github][2].

## MVP-R

MVP is the simplest one of the alternatives (exclusing MVC), its biggest issue is not providing routing capabilities so the Presenter on top of handling User Interaction and communicating with the netork service/persistance layer has to handle the navigation flow as well. With the addition of a Router we solve this problem.

The ViewController acts as a view that gets esposed to the presenter as a protocol (as it happens in VIPER). The Presenter handles the business logic and dispatches the changes back to the view (controller) for display. The router handles the navigation.



                    (Coordinator / Router)
                        |
                        V
View <- Controller <- Presenter -> DataManager/Repository/NetworkService

In the case of MVP (or even MVC for that matter) you can add coordinators just like in MVVM-C. For this article we won't go through it since it is already explained in the MVVM example.

It is a minimal version of VIPER for smaller application which purpose is to separate all the business logic in the presenter and leave the controller as a simple manager for the view. It is common and advisable to further separate the controller from the presenter by having the whole communication happen only through the use of protocols. This will increase the code needed, but on the other hand makes the presenter easily reusable by different controllers that want to implement the same behaviour.

Since we are not using a Coordinator we need to set up the presenter and the controller from the SceneDelegate. The better way would be to create both in the Coordinator and set up the dependencies there, just like we did for both VIPER and MVVM-C, but for this basic example this is still better than doing it from the controller itself. The controller should have a reference to the interface of the presenter, but it should not have a strong link to the presenter iself.

```
class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?


    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        if let windowScene = scene as? UIWindowScene {
            let window = UIWindow(windowScene: windowScene)
            let vc = setupInitialController()
            window.rootViewController = vc
        }
    }


    private func setupInitialController() -> UIViewController {
        let presenter = Presenter()
        let vc = ViewController(presenter: presenter)
        presenter.userInterface = vc
        return vc
    }
```

The Presenter is kept alive by the controller which has a strong reference to it. In the controller we only do the bare minimum we need to set up the views, populate them with data and pass actions back to the presenter, but we do not have any business logic. Everything else is handled in the presenter.

```
class ViewController: UIViewController {

    init(presenter: PresenterInput) {
        self.presenter = presenter
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError()
    }

    let presenter: PresenterInput
    weak var titleLabel: UILabel?
    weak var nextButton: UIButton?
```

In viewDidLoad we set up the controller's UI and we let the presenter know that we are now in the view hierarchy so it can start setting up and loading the data.

```
    override func viewDidLoad() {
        super.viewDidLoad()
        setupTitleLabel()
        setupNextButton()

        presenter.initialLoading()
    }

    @objc func goToDetail() {
        presenter.goToDetail()
    }

    private func setupTitleLabel() {
         let label = UILabel(frame: CGRect(x: 0, y: 150, width: 350, height: 55))
         label.textAlignment = .center
         label.textColor = .red
         view.addSubview(label)
         self.titleLabel = label
    }
    private func setupNextButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 450, width: 350, height: 55))
        button.setTitle("Next", for: .normal)
        button.setTitleColor(.red, for: .normal)
        button.addTarget(self, action: #selector(goToDetail), for: .touchUpInside)
        view.addSubview(button)
        self.nextButton = button
    }
```

We can now take a look at the presenter. The first thing to do is to figure out what actions should the controller pass up to the presenter and what results does the presenter pass back to the controller. We are going to formalize them as protocols.

```
protocol PresenterInput: class {
    var userInterface: PresenterOutput? { get set }
    func initialLoading()
    func goToDetail()
}

protocol PresenterOutput: class {
    func setupLabel(text: String)
    func showScreen(vc: UIViewController)
}
```

Now onto the presenter itself. We set up the label once loaded and we set up the new controller once the "go to detail" button is pressed. In this case we are simply setting up a label, here you would connect to the database or webservice and load your model.

```
class Presenter: PresenterInput {

    weak var userInterface: PresenterOutput?

    func initialLoading() {
        userInterface?.setupLabel(text: "Home")
    }

    func goToDetail() {

    }

}
```

Here we can either use a router, instantiate a view controller or perform a segue. I tend to dislike segues in MVP and prefer to instantiate th controller directly if we do not have a routing layer, but both solutions are obviously not great. With the segue you need to find the storyboard to see what it means on top of having strings (but that can be solved by using Swiftgen or R). Instantiating a controller would mean importing UIKit which you should avoid doing in a Presenter.

    func goToDetail() {
        //TODO: Should use Router/Coordinator instead
        let presenter = DetailPresenter(dismissalAction: { [weak self] in
            self?.userInterface?.setupLabel(text: "Dismissed")
        })
        let detail = DetailViewController(presenter: presenter)
        presenter.userInterface = detail

        userInterface?.showScreen(vc: detail)
    }

Finally back in the ViewController we implement the delegate

extension ViewController: PresenterOutput {
    func setupLabel(text: String) {
        titleLabel?.text = text
    }

    func showScreen(vc: UIViewController) {
        present(vc, animated: true, completion: nil)
    }

}

Time for the detail view. Here we are simply going to have a dismiss button.

The controller is very similar to the previous controller

import UIKit

class DetailViewController: UIViewController {

    init(presenter: DetailPresenterInput) {
        self.presenter = presenter
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError()
    }

    let presenter: DetailPresenterInput
    weak var backButton: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()
        setupBackButton()
    }

    @objc func goBack() {
        presenter.backAction()
    }

    private func setupBackButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 450, width: 350, height: 55))
        button.setTitle("Dismiss", for: .normal)
        button.setTitleColor(.blue, for: .normal)
        button.addTarget(self, action: #selector(goBack), for: .touchUpInside)
        view.addSubview(button)
        self.backButton = button
    }
}

The same goes for the presenter, with the distinction of having a reference to the side effect to perform on dismissal


protocol DetailPresenterInput: class {
    var userInterface: DetailPresenterOutput? { get set }

    func backAction()
}

protocol DetailPresenterOutput: class {
    func dismiss()
}

class DetailPresenter: DetailPresenterInput {

    init(dismissalAction: @escaping Dismissal) {
        self.dismissalAction = dismissalAction
    }

    weak var userInterface: DetailPresenterOutput?
    private let dismissalAction: Dismissal

    func backAction() {
        dismissalAction()
        userInterface?.dismiss()
    }
}

We finally implement the protocol in the controller

extension DetailViewController: DetailPresenterOutput {
    func dismiss() {
        dismiss(animated: true, completion: nil)
    }
}

The last thing we miss is loading some data. We can load a label to show in the detail screen once the view loaded. In the controller we call the presenter asking it to load the data and in the presenter we pass the request to the repository that has the responsibility of loading the data (from the network, fielsystem,...).

In DetailController:

    override func viewDidLoad() {
        super.viewDidLoad()
        setupBackButton()

        presenter.initialLoading()
    }

In DetailPresenter we first update the Input:

protocol DetailPresenterInput: class {
    var userInterface: DetailPresenterOutput? { get set }

    func backAction()
    func initialLoading()
}


The Output:

protocol DetailPresenterOutput: class {
    func showDetail(withText: String)
    func dismiss()
}

And finally the Presenter by calling the repository, fetching the daqta and returning it to the controller:


    private let repository = DetailRepository()

    func initialLoading() {
        repository.loadData { [weak self] (data) in
            self?.userInterface?.showDetail(withText: data.name)
        }
    }

We can now create the Repository:

final class DetailRepository {
    var model: DetailModel?

    typealias Completion = (DetailModel) -> Void

    func loadData(completion: Completion) {
        //TODO: Get model from network / db
        let model = DetailModel(name: "Detail")
        self.model = model
        completion(model)
    }
}


And the model:

struct DetailModel {
    let name: String
}

Finally we update the controller by adding the label and setting it up:

    let presenter: DetailPresenterInput
    weak var titleLabel: UILabel?
    weak var backButton: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTitleLabel()
        setupBackButton()


        ....



    private func setupTitleLabel() {
         let label = UILabel(frame: CGRect(x: 0, y: 150, width: 350, height: 55))
         label.textAlignment = .center
         label.textColor = .red
         view.addSubview(label)
         self.titleLabel = label
    }


And finally populate it:


extension DetailViewController: DetailPresenterOutput {
    func showDetail(withText text: String) {
        titleLabel?.text = text
    }

    func dismiss() {
        dismiss(animated: true, completion: nil)
    }
}

You can find the source code on [Github][3].


## MVC


View <- Controller <-> Model

MVC is the standard in iOS development. Model for the data, view for the UI and the Controller to manage the screen.

The AppDelegate is the same as the other examples, we simply setup the SceneDelegate:

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        return true
    }

    // MARK: UISceneSession Lifecycle

    func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        return UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
    }

}


In the SceneDelegate we setup the initial controller:

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?


    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        if let windowScene = scene as? UIWindowScene {
            let window = UIWindow(windowScene: windowScene)
            window.rootViewController = ViewController()
        }
    }
}

We set up the controller:


class ViewController: UIViewController {
    weak var titleLabel: UILabel?
    weak var nextButton: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTitleLabel()
        setupNextButton()

    }

    //MARK: Private UI Setup

    private func setupTitleLabel() {
         let label = UILabel(frame: CGRect(x: 0, y: 150, width: 350, height: 55))
         label.textAlignment = .center
         label.textColor = .red
         view.addSubview(label)
         self.titleLabel = label
    }
    private func setupNextButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 450, width: 350, height: 55))
        button.setTitle("Next", for: .normal)
        button.setTitleColor(.red, for: .normal)
        button.addTarget(self, action: #selector(goToDetail), for: .touchUpInside)
        view.addSubview(button)
        self.nextButton = button
    }

And we load whatever we need to load and update the ui:

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTitleLabel()
        setupNextButton()

        loadData()
    }

    ...


    //MARK: Actions

    private func loadData() {
        titleLabel?.text = "Home"
    }

    @objc func goToDetail() {
        let vc = DetailViewController(repository: DetailRepository())
        present(vc, animated: true, completion: nil)
    }
}

Now onto the detail screen. Similarly to the MVP example we inject the dependency in the controller and we setup the screen:

class DetailViewController: UIViewController {
    init(repository: DetailRepository) {
        self.repository = repository
        super.init(nibName: nil, bundle: nil)
    }

    required init?(coder: NSCoder) {
        fatalError()
    }

    private let repository: DetailRepository

    weak var titleLabel: UILabel?
    weak var backButton: UIButton?

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTitleLabel()
        setupBackButton()

        loadData()
    }

    //MARK: Private UI Setup

    private func setupTitleLabel() {
         let label = UILabel(frame: CGRect(x: 0, y: 150, width: 350, height: 55))
         label.textAlignment = .center
         label.textColor = .red
         view.addSubview(label)
         self.titleLabel = label
    }
    private func setupBackButton() {
        let button = UIButton(frame: CGRect(x: 0, y: 450, width: 350, height: 55))
        button.setTitle("Dismiss", for: .normal)
        button.setTitleColor(.blue, for: .normal)
        button.addTarget(self, action: #selector(goBack), for: .touchUpInside)
        view.addSubview(button)
        self.backButton = button
    }


Calling loadData will now load the data from the Repository:



    //MARK: Actions

    private func loadData() {
        self.repository.loadData { [weak self] (data) in
            self?.titleLabel?.text = data.name
        }
    }

    @objc func goBack() {
        dismiss(animated: true, completion: nil)
    }

}

The repository and the model are the same as in the previous example:

final class DetailRepository {
    var model: DetailModel?

    typealias Completion = (DetailModel) -> Void

    func loadData(completion: Completion) {
        //TODO: Get model from network / db
        let model = DetailModel(name: "Detail")
        self.model = model
        completion(model)
    }
}

struct DetailModel {
    let name: String
}

You can find the source code on [Github][4].

## What should I use?

You should not just use one architecture and stick with it no matter what. What architecture to use depends heavily on what kind of application you're building and what it is trying to do.

An application that shows a couple of screens from a JSON request is completely different from an application that handles a social networking application with user login, registration, front page, timeline, private messaging, ...

Getting so stuck with one architecture and using it everywhere indiscriminately means fitting a round peg in a square hole.


[1]: https://github.com/valeIT/mvvm-ios
[2]: https://github.com/valeIT/viper-ios
[3]: https://github.com/valeIT/mvp-ios
[4]: https://github.com/valeIT/mvc-ios
