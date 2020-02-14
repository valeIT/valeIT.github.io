---
layout: post
title: Updating Your Cocoapod Framework - iOS Dependencies
date: 2020-01-14 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

There are lots of guides on [how to publish a brand new iOS framework using Cocoapods][1], but I couldn't find a good one about updating it. The process is pretty straightforward, but not having a clear documentation for the use case makes it harder than it should be.

This article will assume that you already have a framework set up and published using Cocoapods and that you either have a valid Cocoapods session or can get granted access by a maintaner.

#### Adding A New Maintainer

Before publishing an update your machine needs to be authorized to make changes to that framework's Cocoapods Spec.

If that's not the case you need to get access from an authorized user otherwise you won't be able to publish the new version.

The key is stored in the user's local machine that has published the framework the first time. From that machine it is possible to add a new user by running `pod trunk add-owner FRAMEWORK_NAME USER_EMAIL`. The email needs to be of a valid user account from the Cocoapods website. You will receive a link to that email to activate the account. Be wary that this account does not have a password, the token will be saved in the mac's keychain.

#### Publishing An Update

Now that all the necessary pieces are set up we can actually start working on publishing the update.

1. Make your changes to the code making sure to understand that updating a framework is not like updating an app. Other people are making use of the API you provide. If there are changes in the API you need to have deprecation warnings/errors for the removed/changed functionality. Consider having both working at once for some time to give your users the time to update their code to take advantage of the new APIs.

1. Push them to a remote

1. Add a git tag. Remember to use [semantic versioning][2] for it and to keep it consistent. Users of your frameworks are used to semantic versioning so if you are using something else you may confuse them. If you change your API significantly you should release it as a new major release so users are aware that the changes are significant. Minor releases should NOT change the API in a backward incompatible way. All code that used to build without errors or warnings should still build correctly.

1. Update the podspec with the new cocoapod version (using semantic versioning) and the corresponding tag. Add the tag to the commit containing the change in the podspec or a later commit. If you add it to a commit before the change in the podspec it won't work and users will still be served the old version of the framework.

1. Push the update to Cocoapods trunk by running `pod trunk push PODNAME.podspec`. You can also check that your PodSpec follows the official spec by running `pod lint PODNAME.podspec



[1]: {% post_url %}
[2]: https://semver.org/
