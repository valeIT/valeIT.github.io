---
layout: page
title: SwiftUI List - Move and Delete
---
# SwiftUI List - Move and Delete

{% include_relative BeforeEachFile.md %}

List {
...
}.onMove { model.move(from:$0,to: $1) }//drag to move
.onDelete { model.remove(\$0) }//swipe to delete

That's really it!
