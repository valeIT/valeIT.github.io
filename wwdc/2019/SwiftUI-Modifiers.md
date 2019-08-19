---
layout: page
title: SwiftUI Modifiers
---

# SwiftUI Modifiers

{% include_relative BeforeEachFile.md %}

You can add modifiers to every view:

Text("Hi").padding(5).backgroundColor(.white)

Will first add a padding and after add a background color. You can invert the oreder to have the padding outside of the label instead of inside. This way the order everything is applied is deterministic and you always know the result.

If you have a more complex layout you can apply modifiers to both single elements as to groups:

Form {
...
Button(action: confirm){Text("Confirm Selection")}.disabled(selectedItem == nil)
...
}

Instead of only disabling the button you can disable the whole form:

Form {
...
Button(action: confirm){Text("Confirm Selection")}
...
}.disabled(selectedItem == nil)

Of course you can use this with every modifier to apply every modifier to every element inside that group:

Form {
...
Button(action: confirm){Text("Confirm Selection")}
...
}.disabled(selectedItem == nil).padding(5)
