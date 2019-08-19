---
layout: page
title: SwiftUI Bindings
---
# SwiftUI Bindings

{% include_relative BeforeEachFile.md %}

You can use \$ to bind values to SwiftUI views

Text(\$value)

Whenever \$value changes Text is automatically updated by SwiftUI

Otherwise you can use the@ObjectBinding modifier. By applying it to the model it tells SwiftUI that the model is the source of truth for the view. SwiftUIwill keep the view in sync with themodel.
