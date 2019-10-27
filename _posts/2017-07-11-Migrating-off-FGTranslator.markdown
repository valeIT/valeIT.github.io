---
layout: post
title: Migrating off FGTranslator
date: 2017-07-11 19:09:33.000000000 +01:00
type: post
published: true
status: publish
categories:
- Tech
author: Valentino Urbano
---

I've been using Microsoft Translator for a few years in [Translatory](https://itunes.apple.com/us/app/translatory-your-personal/id1018240873?&at=1010lHG?mt=8), it has all the features you would expect while being priced way more competitively than Google Translate.

At the end of last year, Microsoft announced that they'd retire the old APIs and would migrate to Azure for all of their services. They finally dropped support a few months ago. Not too bad, I thought, would just migrate the URL to the new one and it will keep working.

The sad part, for me, is that making an Azure account requires a credit card linked to your bank account and I don't have one, the one that I have linked to my bank account doesn't work online, and I'm not going to open the third one just for Azure. I tried to use my prepaid card that I use normally for all purchases, but it was rejected because it was prepaid. It was clear that I had to move somewhere else.

The criteria to decide where to move to:

- It had to have a free tier
- After the free tier, it needed to have a reasonable pricing structure based on actual use
- It had to be from an established company (seen too many startup closing shops in a few months)
- It had to support a decent amount of languages.
The only one I found that fulfilled all of them is [Yandex](https://translate.yandex.com/developers). [^1]


## Migrating the codebase

The data model and the view were already totally decoupled, that said I didn't want to change the method signatures for the 2 main calls to the backend of the app:

```
  func supportedLanguages(_ completion: @escaping (NSError?, [String]?) -> ())

  func translateText(_ text: String?, withSource: String? = nil, target: String? = nil, completion: @escaping TranslatorCompletionHandler)
```

The first one is called on launch (if not cached) and retrieves all the supported languages from the web service to show them in the pickers, the second one performs the translation.

The migration itself wasn't hard at all, just make a data manager called FGTranslator (I didn't want to keep the old name so I rename it simply to `TranslatorManager` and make a network call). FGTranslator also includes caching, removed to speed up development in this version. I mostly followed the content of those 2 function that was in FGTranslator to keep the behavior as similar as possible since this app is really old and I don't remember if  I had assumed some specific behavior, I doubt, but just to be safe.

## Integration

To use it in your project:

1. Integrate Alamofire in your project
2. Copy the file `TranslatorManager.swift` in your project
3. Add `TranslatorManager.sharedInstance.initWithKey(key: APIKEY)` in `application: willFinishLaunching`

### How to use

As said above I kept the method signatures for the 2 main functions I used so those 2 should just work. The others are not implemented and I don't plan to since I'm not using them.

The only change is when you need to reset it instead of creating a new instance of the object like you did with FGTranslator you need to call `TranslatorManager.sharedInstance.resetWithKey(key: APIKEY)`. Also if you used `flushCache` there is `TranslatorManager.sharedInstance.flushCache()` as a placeholder, it doesn't do anything for now.

### Caveats

I'm using swift so I migrated the network library from AFNetworking to Alamofire which is the only dependency.

It's really bare bone and that's why I'm not hosting it on Carthage or Cocoapods. It is meant as a working solution to be improved. It works out of the box and the error handling is fine, but not great. You should tweak it for your use if you're gonna use it in production.

Note: It has no caching, it is immediate to add caching, just uncomment a few line and add `PinCache` ad dependency, but it's not done and not tested. Without caching you're going to hit the API server more often which will incur in more costs.

Yandex supports Language Recognition only by using a different endpoint (not the translation endpoint) so I didn't include it, but maybe it will be included in the future (not promising anything though).

If you integrate this into your app, make sure to follow the [Design Requirements](https://tech.yandex.com/translate/doc/dg/concepts/design-requirements-docpage/).

## Code


<script async src="https://gist.github.com/valeIT/6a0b8517b94921f653c6cb334a1a4015.js"></script>


[License: MIT]


## Docs

Yandex has a [decent documentation](https://tech.yandex.com/translate/doc/dg/concepts/About-docpage/), it misses some responses for some services but overall not too bad.


---

[^1]: Weird enough the link gives you a 404 if it's written as https://translate.yandex.com/developers/