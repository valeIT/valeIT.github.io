---
layout: post
title: Automatic App Testing on Google Play Store
date: 2019-09-18 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
One big thing that Apple does not have and Google does in its App Store is automatic testing before every deployment.
Every build that you upload to the Google Play Stores gets automatically tested using either a device farm or simulators (not sure which one) for free. Thanks to that you can see if your app crashes on certain devices, its performance and look across different form factors and specs, and get automatic screenshots for each phone model so you take take a peek. You can also write scripts to automate this further, but the baseline you get our of the box is fantastic.
It is basically [lighthouse][1] for mobile!

Android needs something like this because it is a very fragmented market. Some apps that work fine on certain devices might not work on others, especially if your app is using the phone's hardware. So you might feel that Apple doesn't really need it, but I don't agree. Even though Apple does not have this problem it surely has different screen sizes and form factors, and it would be super helpful for developers to have something similar. The good thing about it being integrated in the store is that everyone will get it out of the box, right now you can do the same on iOS using external tools, but how many developers are going through the hassle to set them up?

Let's look at an example:
![Play Store Automatic Testing](/assets/article_images/playStoreAutomaticTesting.png)
Here you might notice that in build 1 I shipped a crashing bug due to an external framework that was not correctly upgraded and the subsequent version 2 that solved the issue.

[1]: https://developers.google.com/web/tools/lighthouse/
