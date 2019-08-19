---
layout: page
title: SwiftUI Previews
---

# SwiftUI Previews

{% include_relative BeforeEachFile.md %}

Press play to start a preview.

You can customize your preview with data:

#if DEBUG
struct Controller_Previews: PreviewProvider {
static var previews: some View {
SwiftUIView(model: MyModel())
}
}
#endif

You can also have multiple views to preview:

xx

And even change the environment we're previewing our app in:

xx
