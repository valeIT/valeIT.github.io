---
layout: page
title: Integrating SwiftUI
---
# Integrating SwiftUI

{% include_relative BeforeEachFile.md %}

## SwiftUI to UIKit

Wrap SwiftUI into a controller use:
UIHostingController
NS ..

Wrap SwiftUI into a view:
NSHostingView

Watchkit:
class MyWKHostingController:WKHostingController<MyView>{
override var body: MyView {
  return MyView()
}
ovverride setNeedsBodyUpdate(){//to force update

}
}
Add it to the storyboard and set the custom class.
- More @ SwiftUI in WatchOS

## UIKit to SwiftUI

Use UIView in SwiftUI:
UIView -> UIViewRepresentable
NSView -> NS...
WKInterfaceObject -> WK...
UIViewController -> ...
NSV... -> ...

You can also update it:

@Binding var rating: Int
func updateUIView(_ uiView:UIKitCustomView,context:Context) {
  uiView.rating = self.rating
}

SwiftUI views do not get focus by default, implement focusable to allow it:
focusable(:)

Can use SwiftUI with Objective-C as you alreadt do with all the rest of your Swift code thjat you want to expose.
@objc class ...

Source:
[Integrating SwiftUI](https://developer.apple.com/wwdc19/231)