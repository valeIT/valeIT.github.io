---
layout: post
title: View Model + Repository in iOS
date: 2019-11-09 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

## Using Basic View Models To Set Up Cells

When you're used to work in MVC migrating to a different pattern might sound hard and you might give up before even trying. If you want to do MVC, but start using some cleaner code you can. It probably won't be as good as something written in VIPER, but not all apps need such big of an architecture.

### MVC

Even using MVC you can still use a ViewModel to separate your business logic and your presentation layer without having to use any reacting framework or data binding.

```
struct User {
    let name: String
    let surname: String
}
extension User: Codable {}
```

Let's assume we have a tableView and we want to display a list of users:

```
    private let cellReuseIdentifier = "reuseIdentifier"
    public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
         guard let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath) as? UserTableViewCell else {
            fatalError()
        }
        let model = model[indexPath.row]
        cell.populate(withModel: model)
        return cell
    }
```

Every call to cellForRowAt indexPath should be this short. Configuring the cell should be done from the cell itself and not in the controller. Look for opportunities to move logic where it should be. When starting out with MVC we find ourselves to put everything in the controller without thinking where the right place for this function should be.

We can now let the cell configure itself based on the model. Inside the cell class:

```
    func populate(withModel model: User) {
        titleLabel.text = model.name
        descriptionLabel.text = model.surname
    }
```

### View Model

We did not explain how we got the model object. In this case it is pretty likely that the model and the view model are the same since the object is really small and composed only of strings that map directly to fields in the view. If that's not the case we will need an intermediate layer that converts our model to a viewModel.

We first define our model that maps to the object (some people call this entity) and the viewModel that directly maps to the various fields in the view. We also need to define how to convert from one to the other:

```
struct AmountModel {
    let amount: Double
}
struct AmountViewModel {
    let amount: String
}
extension AmountViewModel {
    init(model: AmountModel, formatter: NumberFormatter) {//1
        self.amount = formatter.string(from: model.amount as NSNumber) ?? ""
    }
}
```

1. Note how the view model doesn't know about the formatter, it gets told what formatter to use.

Usually people using MVVM put all the logic inside the viewModel. I strongly disagree. The viewModel should be dumb, as the model, the should only know how to configure themselves. They can have helper methods, but they should not communicate directly to databases or initiate networking calls.

### Repository

For those we need another object. We will call it Repository, but you can call it however you want. Names are just there to make it clear to others what the purpose of an object is so if we use known conventions more people will be able to understand it without having to dive into the code.

```
class AmountRepository {
    private let formatter = NumberFormatter()
    private let model: [AmountModel] = [] {
        didSet {
            populateViewModel(model)
        }
    }

    var viewModel: [AmountViewModel] = []

    func load() {
        //does network request, reads db ,...
        // in the end we get back the model
        model = [AmountModel(amount: 2),AmountModel(amount: 3)]
    }

    func populateViewModel(model: [AmountModel]) {
        viewModel = model.map{ AmountModel(model:$0,formatter:formatter) }//we convert the model to a viewModel. Notice how the viewModel in not private, we expose that to the controller
    }
}
```

The repository acts as middleman between the outside world (api/db) and the view and configures the viewModel.

From the controller we add the repository and we get the viewModel:

```
private let repository = AmountRepository()

func viewDidLoad() {
    super.viewDidLoad()
    repository.load()
}
public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier, for: indexPath) as? UserTableViewCell else {
        fatalError()
    }
    let model = repository.viewModel[indexPath.row]
    //Here we access the view model, we could also expose it using a method or a protocol if we would want to enforce more separation of concerns, but this one is a great first step.
    cell.populate(withModel: model)
    return cell
}
```

Note how the controller holds a strong reference to the repository. This way once the controller goes out of scope the repository will get deallocated as well.