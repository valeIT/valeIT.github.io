---
layout: page
title: Swift API Design
---
# Swift API Design

{% include_relative BeforeEachFile.md %}

Prefixes only for APIs from Objective-C

Use classes if you NEED the reference.
Where it has identity and its identity is different from the value it's holding (and example in Apple frameworks in a box in RealityKit).

Needs to be a concious choice.

If you copy a struct that includes a  class, the class is the same. This can be really confusing to users of your API.

One solution:

struct Model {
  private var _reference: MyReference
  private var reference {
    get { _reference }
    set { _reference = MyReference(copying: newValue)}
  }
}

But if reference is mutable you could just mutate its properties without changing the object itself.

So keep it private and instead only expose what you need:

struct Model {
  private var _reference: MyReference
  public var isEditable {
    get { _reference.isEditable }
    set {
      if !isKnownUniquelyReferenced(&_reference){_reference = MyReference(copying: _reference)}
      _reference.isEditable = newValue
      }
  }
}

Or even better (to expose a more generic copy on write version):

@dynamicMemberLookup
struct Model {
  private var _reference: MyReference
  public subscript<T>(dynamicMember keyPath: ReferenceWritableKeyPath<Texture,T>)->T {
    get { _reference[keyPath: keyPath] }
    set {
      if !isKnownUniquelyReferenced(&_reference){_reference = MyReference(copying: _reference)}
      _reference[keyPath: keyPath] = newValue
      }
  }
}

--

Use protocols for composability. But don't start with a protocol. Start with concrete use and later on if you need make a protocol. Consider making a generic type instead of  a protocol and also consider making protocols composable.

How to declare
In your struct:
@DefensiveCopying public var view UIView

Some example shown are for Late Initialization and Defensive Copying, but you can use it for what you want.

In your DefensiveCopying definition
@propertyWrapper
public struct DefensiveCopying<Value:NSCopying>{
  private var storage:Value
  public init(initialValue value:Value){
    storage = value.copy as! Value
  }
  public var value:Value{
    get{storage}
    set{storage = newValue.copy() as! Value}
  }
}

You can also use extensions on DefensiveCopying to provide additional initializers.
The compiler will generate a $view backing store.

How to use a custom initializer (optional)
@DefensiveCopy(customInit: view)
public var view UIView

Other examples:
@UserDefault(key: "", defaultValue: )
@ThreadSpecific
@Options//for command line options

Used extensively in SwiftUI (@State,@Binding,@Environment).

Source:
[Modern Swift API Design](https://developer.apple.com/wwdc19/415)