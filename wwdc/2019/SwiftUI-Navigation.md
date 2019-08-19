---
layout: page
title: SwiftUI Navigation
---

# SwiftUI Navigation

{% include_relative BeforeEachFile.md %}

Nest the view into a NavigationView to allow navigation.

Use navigationBarTitle to set a title for that specific view.

Use a NavigationButton to setup navigation if you want a button to push a new view into the navigation stack.

You can use navigationBarItems to create items/buttons on the navigation bar.

If for example we want a Tab (old UITabView):

struct ContentView: View {
var body: some View {
NavigationView{
TabbedView{
MainView()
LogView().tabItemLabel{
Image(systemName: "clock.fill)
}
}
}
}
}

Source:
[SwiftUI Essentials](https://developer.apple.com/wwdc19/216)
[Getting Started with SwiftUI]()
