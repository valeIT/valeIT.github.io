---
layout: page
title: SwiftUI on watchOS
---

# SwiftUI on watchOS

{% include_relative BeforeEachFile.md %}

You can use the same SwiftUI code as in iOS and macOS.

The controller that includes your SwiftUI views need to be a subclass of WKHostingController<T> where T is your SwiftUI view.

With list can use .listStyle(.carousel)

[notificsation](SwiftUI on watchOS - Notifications)

.digitalCrownRotation($offset,from:0,to:size.height)
$offset needs to be a binding. Also need to provide the upper and lower limits. This is usually used to scroll up and dopwn a list.

.digitalCrownRotation(\$offset,from:0,to:size.height,by: 1)
The "by" parameter is optional, by setting it you specify how much the scrolling steps by. It can be used to control the value of numberin a textfield for exmple using the digital crown.

For even more control:
.digitalCrownRotation(\$offset,from:0,to:size.height,by: 1,sensitivity:.high,isContinuous:true)
sensitivity - how sensitive it is
isContinuous - whether or not to stop at the limit of the sequence of wrap around

You can add .focusable(true) toviews to make the view able tobe edited using the digital crown.

You can also have custom interactions using the digital crown by having a @State variable and using the digital crown to update it.

Source:
[SwiftUI on watchOS](https://developer.apple.com/wwdc19/219)
