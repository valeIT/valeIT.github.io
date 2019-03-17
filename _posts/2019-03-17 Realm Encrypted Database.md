---
layout: post
title: Realm Encrypted Database iOS
date: 2019-03-15 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

At times you need more security and you would like to have your whole database encrypted on the device. With realm it is really easy to do so. First you need to generate an ecryption key securely and store it safely (I store them in the Keychain).

We are going to assume that you already know how to add and remove data to and from the keychain. If you don't you can check out Apple's [official documentation on it][1].

Open the file where you initialize the database and right before you set the "Realm.Configuration" object add the following:

```
if !KeychainWrapper.hasEncryptionKey() {
      var keyData = Data(count: 64)//generate key
      let count = keyData.count
      let _ = keyData.withUnsafeMutableBytes {mutableBytes in
        SecRandomCopyBytes(kSecRandomDefault, count, mutableBytes)//make it random
      }
      try? KeychainWrapper.addEncryptionKey(encryptionKey: keyData)//save it
    }
    guard let key = try? KeychainWrapper.getEncryptionKey() else {//get the saved key
      log.error("error getting encryption key")
      fatalError()
    }
    let config = Realm.Configuration(
      fileURL:dbPath,
      encryptionKey: key,//use the key to encrypt the db
```

[1]: https://developer.apple.com/documentation/security/keychain_services
