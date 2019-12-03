---
layout: post
title: Setup Continuos Integration / Delivery with Bitrise
date: 2019-12-04 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

[This post is NOT sponsored, I just like the service.]

Bitrise provides Continuos Integration and Continuos Deployment for iOS and Android applications. Whenever you decide (for example after each new commit) Bitrise will build the run, run the tests and either notify you of problems or if you want it caan automatically releaase a new build to the store.

- Workflow

The workflow defines the action that will be taken by Bitrise each time a new build is requested (by pusing a specific branch, opening a pull requedst of whatever is defined in the Triggers section). The basic actions are already configured for you, but if you need a custom aciton you wil need to add it to the queue. For example in our project we are using swiftgen to generate some Swift files automatically so we added a new script to generate the files after running the Cocoapod installation step.

- Code Signing

Here you can add the certificates and provisioning profiles if you want to set up code signing manually or use an apple account to set it up automatically

- Secrets

Here you can add Environemnt Variables that are secretly saved by Bitrise

- Environemnt Variables

Here you can add environemnt variables that are publicly exposed

- Triggers

Each trigger defines a condition to trigger Bitrise. Conditions can be of 3 kinds:
Pushing a new commit to a specific branch (or any branch)
Opening a pull request targeting a specific branch (or any bramnch)
Pushing a new git tag

- Stack

Here you can define which version of Xcode and mac OS will be used for the build

- Bitrise.yml

\This is the generated configuration file with everything you have set up in the previous screens. You can also edit this file directly.

- Add the webhook
In the code section you will find the webhook set up. Bitrise can set it up automatically or it can be setup manually by pasting the provided bitrise webhook url inside the appropriate section on Github, Gitlab or Bitbucket.
For Gitlab go to Settings -> Web Hooks -> add the url to the URL field and select the events you want to ping the webhook with.
Bitbucket Settings -> Webhooks -> Create Webhook -> add the url to the URL field
Github Settings -> Webhook -> Add webhook -> add the url inside the payload on the URL field

## Conclusion

While we are not using Bitrise for Continuos Deployment, all our deployments still happen manually, we can be confident that each time we push a new commit or open a pull request the app will build and passes all tests so anybody can clone it without worries.

Source
[Webhooks setup][1]

[1]: https://github.com/bitrise-io/bitrise-webhooks#gitlab---setup--usage