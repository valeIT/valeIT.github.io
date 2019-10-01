---
layout: post
title: Reactive Data Streams Using SwiftUI And Combine
date: 2019-09-27 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I finally had some time to spend with SwiftUI and Combine after a month's break from it this past weekend. Things have changed a lot since when I last tried it. The latest betas (after beta 6) brought many changes: new keywords and components. On top of that the way to do things changed a lot and they old way is not working anymore.

# Build A Reactive View With SwiftUI And Combine

Let's see how it is possible to create a simple SwiftUI view that automatically listen for changes in the viewModel and automatically updates its state with only a few lines of code.

First we create a very simple model to store our data:

```
struct PriceViewModel {
    let price: String = "22.0 USD"
}
```

Next we create our container object (manager) to handle persistance/networking and to load out model and make it available to the view. Remember to import Combine and to have your container implement the ObservableObject protocol to be able to use combine automatically:

'''
import Foundation
import Combine

class PricePresenter: ObservableObject {

    init() {
        loadData()
    }

    @Published var model: PriceViewModel?

    func loadData() {
        if let cache = getCache() {
            self.model = cache
        }
    }

    private func getCache()   {
        //loads data from disk
    }

}
'''

You also need to annotate the model with the @Published keyboard. This will tell Combine to automatically setup the stream for us.

Finally it is time to hook up the view. Since our model is optional we need to handle the initial empty state. I haven't found a great way to do it yet, there are a few methods, but all of them are not great. Hopefully Apple is going to introduce support for `if let` statements inside the body of a `View` soon enough. For now we have to use map that filters out the optionals, this way you can also set a default value.

'''
import SwiftUI

struct PriceView: View {

    @ObservedObject var viewModel = PricePresenter()

    var body: AnyView {
        viewModel.model.map{Text($0.price)} ?? Text("Loading...")
    }

}
'''

Note: In this case we are returning the same view from both cases (a Text), if we would have returned different kind of views we would have needed to cast them to AnyView before returning them, otherwise the return type would not match.

Sources:

- [SwiftUI Optionals][1]
- [SwiftUI ViewBuilder][2]
- [SwiftUI Optionals 2][3]

[1]: https://stackoverflow.com/questions/56605815/conditional-rendering-with-optionals-in-swiftui
[2]: https://developer.apple.com/documentation/swiftui/viewbuilder
[3]: https://medium.com/q42-engineering/swiftui-optionals-ead04edd439f
