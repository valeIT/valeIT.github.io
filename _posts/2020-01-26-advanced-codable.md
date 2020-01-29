---
layout: post
title: Advanced Codable in Swift
date: 2020-01-26 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Swift 4 introduced the Codable protocol a few years ago. Some apps migrated to it straight away and others stood with NSJsonSerialization and either manual parsing of the json values or by using a third party framework (like [Gloss][1]).

If you are developing a new application it is easier to make the switch since you can decide before having written a single line or code which way you want to take. I find Codable way Swifty and easy to implement and use, but it also has its drawbacks. Mostly that you need to create dummy classes to be able to decode nested values.

While the basics are straightforward there are a few advanced features like dynamic keys that are confusing if you're not used to them with Codable while they're usually easier with 3rd party solutions.

## Basic Decodable

The easiest way to implement Codable is to name and type the variables the same way as the json and implement Codable. Swift will automatically create the object from you by calling JSONEncoder().encode(data) or JSONDecoder().decode(data).

Given the JSON:

```
{
    "name":"John",
    "surname":"Smith"
}
```

Create the swift struct:

```
struct User {
    let name: String
    let surname: String
}
extension User: Codable {}
```

That's all you need. Swift will automatically encode and decode the model for you from and to a Data object.

The only thing you need to manually do is to instantiate the decoder or encoder and pass the object to decode/encode.

If you need to decode an object:

```
//Get the 'Data' from the body of the response
let user = JSONDecoder().decode(data) //decode
```

If you need to encode it instead:

```
let user = User(name: "John", surname: "Smith")
let json = JSONEncoder().encode(user)
```


## Handling Dynamic Keys

Handling dynamic keys is not supported by default using Codable. To be able to decode or encode an object that contains a key that is dynamic we need to create a custom DynamicKey object that can hold anything:

```
import Foundation

//https://gist.github.com/samwize/a82f29a1fb34091cd61fc06934568f82

struct DynamicKey : CodingKey {
    var stringValue: String
    init?(stringValue: String) {
        self.stringValue = stringValue
    }
    var intValue: Int?
    init?(intValue: Int) {
        saelf.stringValue = "\(intValue)"
        self.intValue = intValue
    }
}
```
Make sure that you implement the CodingKey protocol, this way the key can be used as a key by Codable. You'd want to add initializers for any type that the key supports (in this case just Int and String).


We can now go back to the object we want to decode that implements that custom key and implement manual decoding for it. While using a custom key this way automatic decoding is not supported so you need to manually write the implementation of `init(from decoder: Decoder) throws`:

```
import Foundation

struct User {
    let linkedAccounts: [UserInfo]?
    let currentAccount: UserInfo
}

extension User: Decodable {
    enum CodingKeys: String, CodingKey {
        case linkedAccounts
        case currentAccount
    }

    init(from decoder: Decoder) throws {
   //user account
   let currentAccount = try container.nestedContainer(keyedBy: DynamicKey.self, forKey: .currentAccount)

   var modelValue: UserInfo?
   for key in currentAccount.allKeys {
       let value = try currentAccount.decode(String.self, forKey: key)
       modelValue = UserInfo(id: key.stringValue, name: value)
   }
   guard let model = modelValue else {
       throw DecodingError.dataCorrupted(DecodingError.Context(codingPath: decoder.codingPath, debugDescription: "Cannot initialize UserModel"))
   }
   self.currentAccount = model

   //linked accounts
   if let linkedAccounts = try? container.nestedContainer(keyedBy: DynamicKey.self, forKey: .linkedAccounts) {//1
       var accountValues: [UserInfo] = []
       for key in linkedAccounts.allKeys {
           let value = try linkedAccounts.decode(String.self, forKey: key)
           accountValues.append(UserInfo(id: key.stringValue, name: value))
       }
       self.linkedAccounts = accountValues
   } else {
       self.linkedAccounts = nil//no linked account
   }
    }
}
```

1. We try to get the object that has for the the custom key and loop through the keys in the dictionary to map it to our model object.

This is just an example of how you can use it, but it is very powerful. This way you do noyt necessarely need to have a model that looks very similar to the json object returned by the api with the disadvantage of having to write the decoding function manually.

## Automatic Conversion

What follows are a few example on how to setup your Encoder and Decoder object to automatically handle certain common case conversions without having to handle them each time in the model object. This way you don't need to include custom logic for the conversion in the model, but they will live in the encoder/decoder.

**Keys**

```
    let decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        decoder.keyDecodingStrategy = .convertFromSnakeCase
        return decoder
    }()
  let encoder: JSONEncoder = {
    let encoder = JSONEncoder()
    encoder.keyEncodingStrategy = .convertToSnakeCase
    return encoder
  }()
```



Be wary that the keyEncodingStrategy will be opaque to you. All the keys you receive in init(from decoder: Decoder) throws { will be already converted this will lead to you having to define the Coding keys based on the keyDecodingStrategy applied.

If we use the above example for which the server is using snake_case and the client is using camelCase all your CodingKeys will need to be in camelCase.

I run through one caveat using this method. We had occurences of snake case keys that started with a number. The json was: weather_30days we called the key weather30days, but the decoding failed since the 3 would need to be uppercase, but it was a number. After some trial and error we found out that the uppercase letter is just the first letter that comes after it so weather30Days.

**Dates**

Using this approach it is also possible to automatically convert dates using `.dateEncodingStrategy` and `.dateDecodingStrategy`.

```
    let decoder: JSONDecoder = {
        let decoder = JSONDecoder()
        decoder.dateDecodingStrategy = .formatter(dateFormatter)
        return decoder
    }()
  let encoder: JSONEncoder = {
    let encoder = JSONEncoder()
    encoder.dateEncodingStrategy = .formatter(dateFormatter)
    return encoder
  }()
```

The options are [listed in this doc from Apple][2], but most of the times you will be using a custom data formatter as shown.


## Custom Encode Using Type Erasure

We had one case where we needed the result to be .urlInBody, but as json encoded string since we were using a legacy api that only accepted such input. There was no straight way to do it so we had to go the long way around. In the end the api was changed so we could remove this not so great code, but it shows the power of type erasure in Swift.

extension Data {
    func asDictionary() throws -> [String: Any] {
        guard let dictionary = try JSONSerialization.jsonObject(with: self, options: .allowFragments) as? [String: Any] else {
            throw NSError()
        }
        return dictionary
    }
    func asString() -> String? {
        return String(data: self, encoding: .utf8)
    }
}


struct StringEncoding: Encodable {
    let value: AnyEncodable
    let encoder: JSONEncoder
    var valueString: String {
        guard let jsonData = try? encoder.encode(value),
            let string = jsonData.asString() else {
            log.error("StringEncoding failed for \(self.value)")
            assertionFailure("StringEncoding failed")
            return "null"//server doesn't accept an empty value
        }
        return string
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(self)
    }
}

extension SingleValueEncodingContainer {
    mutating func encode(_ value: StringEncoding) throws {
        try encode(value.valueString)
    }
}

struct AnyEncodable: Encodable {

    private let encodable: Encodable

    public init(_ encodable: Encodable) {
        self.encodable = encodable
    }

    func encode(to encoder: Encoder) throws {
        try encodable.encode(to: encoder)
    }
}


## Custom Single Value Decoder

If you need to wrap a value inside a struct or an object, but the json for that property is a single value, you might have thought that you had to create one struct to decode the object closely matching the server response and another to do what you wanted.

While this approach may have its merits, it is not needed in this case. The struct can use SingleValueDecodingContainer and SingleValueEncodingContainer to tell Swift that this struct can be decoded and encoded to a single value.

struct DecimalString: Codable {

    let string: String
    let decimal: Decimal?
    var decimalValue: Decimal {
        return decimal ?? 0
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        self = try container.decode(DecimalString.self)
    }

    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(self)
    }
}

extension SingleValueDecodingContainer {
    func decode(_ type: DecimalString.Type) throws -> DecimalString {
        if let decimalString = try? decode(String.self) {
            return DecimalString(string: decimalString)
        } else if let decimalStringDouble = try? decode(Double.self) {
            return DecimalString(double: decimalStringDouble)
        } else {
            log.error("Error decoding DecimalString, setting as 0")
            return DecimalString(double: 0)//We need to have a default otherwise decoding failure would propagate
        }
    }
}

extension SingleValueEncodingContainer {
    mutating func encode(_ value: DecimalString) throws {
        try encode(value.string)
    }
}

In decode and encode you need to specify your custom encoding and decoding fuctions telling how to turn the single value into this struct and viceversa.

## Speed

If you really care about speed you should stick with NSJSONSerialization in [all cases it is faster][3] (on average Codable takes 2x the time).

But also while using Codable the differences between different approaches [is significant][4]. Implementing encode() and decode() manually instead of having them automatically generated slows the process down by another 2x.

All of this is not really noticeable if the number of objects that you are encoding and decoding is reasonable.


[2]: https://developer.apple.com/documentation/foundation/jsonencoder/dateencodingstrategy
[3]: https://flight.school/articles/benchmarking-codable/
[4]: https://medium.com/@zippicoder/performance-of-decoding-automatically-in-swift4-f089831f05a5
