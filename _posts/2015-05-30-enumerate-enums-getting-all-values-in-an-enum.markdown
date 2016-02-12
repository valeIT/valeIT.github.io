---
layout: post
title: Enumerate enums - Getting all values in an enum
date: 2015-05-30 09:22:43.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

It sounded strange to me, but there is no way to enumerate all the cases of an enum automatically baked in the language. As an example I had this enum for three different strings that corresponded to 3 Identifiers of NSToolbarItems:

     enum Identifier: String {
      case General = "General"
      case Network = "Network"
      case Advanced = "Advanced"
      }

And I need to enumerate them so I can tell the toolbar which items are selectable and which aren't. By the way I have no idea which this method returns an array of `AnyObject` instead of an array of `String`, as it should do --- but I'm digressing.

So I added a new property in the enum called allValues [^1]

:

      func toolbarSelectableItemIdentifiers(toolbar: NSToolbar) -> [AnyObject] {
        return //?
      }

So I changed the enum to include a property that contains all of them --- not the most beautiful thing to see, but it gets it done.

      enum Identifier: String {
      case General = "General"
      case Network = "Network"
      case Advanced = "Advanced"
        
        static let allValues = [General, Network, Advanced]
      }

So now we can do:

     func toolbarSelectableItemIdentifiers(toolbar: NSToolbar) -> [AnyObject] {
     return Identifier.allValues
     }

---

[^1]: I use CapitalCase for enums and constants, but in this case it wasn't actually a constant, it's more like a function that returns all the values of the enum. I know that technically speaking it's a variable inside the enum, but it really shouldn't be necessary.