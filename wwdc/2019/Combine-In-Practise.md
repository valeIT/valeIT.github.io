---
layout: page
title: Combine In Practise
---
# Combine In Practise

{% include_relative BeforeEachFile.md %}

Connection between Publisher and Subscriber.

# Publishers

Value publishers conform to the Publisher protocol. They have 2 associatedtype: an Output, and a Failure. Can attach subscribers to themselvers with the correct method signature.

NotificationCenter supports publishers:
NotificationCenter.defailt.publisher(for: .notificationIdentifier)

.tryMap if fails the error gets returned as a Combine error.

To just decode JSON:
.decode(MyModel.self,JSONDecoder())

.assertNoFailure
The failure will now be a Never and we are going to crash in case of error.
If instead we use
.catch {
  //handle error
 }
 Combine will unsuscribe from the original publisher and subscribe automatically to  a new publisher that uses this catch block in case of error and the return type changes from Value, Error to Value,Never since the error is always handled by our catch block in this case.
In our catch block we can use:
 Just(defaultValue)//syncronously
 to just return this now in case of error.

 If we do nothing else though we lose the orginal publisher. We can handle the error this way, but still have the original .decode handling successes in the future by using flatMap

 .map{
   //transform value
 }.flatMap{data in
  return Just(data).decode{...}.catch{...}
 }

If we want to just return a property we can than create a publisher for  that property:

.publisher(for:/.name)

--
Other examples:

.receive(on:RunLoop.main)
.debounce(0.2)
.throttle(0.2)
.delay(0.1)
.removeDuplicates()
# Subscribers
associatedtypes of Input and Failure
They can receive a subscription, a value or a failure.

One subscription
Followed by zero or more values
At most one completion (but might never complete and always emit events)

Keypath assignment

publisher.assign(to:\.property, on:object)

## Cancellation
Terminate a subscription at any time.
Cancellable protocol
You can use AnyCancellable automatically calls .cancel() on deinit

# Subject

They allow you to multicast and imperatively send a value using send(:)

let subj = PassthroughSubject<Value,Never>()
subj.send(:)

## SwiftUI

Use BindableObject.
Basic model:
class Model:BindableObject{
var name:String{didSet{didChange.send()}}
let didChange = PassthroughSubject<Void,Never>()//we just care that it did change
}
struct ModelView:View{
  @ObjectBinding var model:Model
  var body:some View{
    Text(model.name)
  }
}

.easeToAnyPublisher() //use it to change the method call to extract ut as  a oublisher at any api boundary

Future and Promises

.flatMap {username in
  self.usernameAvailable(username){
    available in
    promise(.success(available ? username : nil))
  }
}



Source:
[Combine In Practise](https://developer.apple.com/wwdc19/721)