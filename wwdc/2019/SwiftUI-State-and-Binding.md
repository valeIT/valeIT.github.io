---
layout: page
title: SwiftUI State and Binding
---
# SwiftUI State and Binding

{% include_relative BeforeEachFile.md %}

view = f(state)

Difference between state  and binding

@state is the source of truth
@binding you define a dependency on a source of truth without owning it sothat it can be provided by another component. It is just a reference to the state.

You can later pass in the binding using the $ prefix.

Publishers fire values over time. They need to be swnt on the main thread. If you have a publishjer you can liste tpo it in your view

```
@state publisherValue

...

onReceive(publisher){
  newValue in
  self.publisherValue =newValue
}
```

If I have a model I can confirm it to BindableObject. I need to provide a publisher.

```
class Model: BindableObject {
  var didChange = MyPublisher<Void,Never>()

  func changeData(){
    //... change data
    didChange.send()
  }
}
```

Every time our model changes we need to send it ober.SwiftUI will debounce it accordingly noit to redraw the view too many times.

We can now implememnt a dependency on our BindableObject using @ObjectBinding. Each view will depend on the model.

```
struct MyView: View {
  @ObjectBinding var model: Model
  //...
}
MyView(model: model)
```
With great Dependency Injection. SwiftUI will automatically manage thje dependency. No manual invalidation needed.

Every time you use a reference type you should use @ObjectBinding.

You can use @EnvironmentObject the same way as ObjectBinding, but indirectly.This is for data needed across the hierarchy. For example it is used for layout direction, dark mode, accent color, ...

state only for small objects since it's owned by the view. If it can be represented by an external source (for example a database) use BindableObject.

