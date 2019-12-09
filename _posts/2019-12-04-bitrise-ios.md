---
layout: post
title: Setup Continuous Integration / Delivery with Bitrise
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

Bitrise provides Continuous Integration and Continuous Deployment for iOS and Android applications. For each trigger that you select (for example after each new new commit) Bitrise will build the app, run the test suite and notify you of problems in case of any failure. In case of success it can also automatically release a new build to the store (or to any beta tester) if you so choose.

We will look on how to set it up for an iOS application. The process for Android is fairly similar. Before that we are going to go through each tab in the web console and see how you can use it.

## Website Sections

- Workflow

The workflow defines the action that will be taken by Bitrise each time a new build is requested (by pushing a specific branch, opening a pull request of whatever is defined in the Triggers section). The basic actions are already configured for you, but if you need a custom aciton you will need to add it to the queue. For example in our project we are using swiftgen to generate some Swift files automatically so we added a new script to generate the files after running the Cocoapod installation step.

- Code Signing

Here you can add the certificates and provisioning profiles if you want to set up code signing manually or use an apple account to set it up automatically.

- Secrets

Here you can add Environemnt Variables that are secretly saved by Bitrise that will be kept private.

- Environemnt Variables

Here you can add environemnt variables that are publicly exposed.

- Triggers

Each trigger defines a condition to trigger Bitrise. Conditions can be of 3 kinds:
  1. Pushing a new commit to a specific branch (or any branch)
  2. Opening a pull request targeting a specific branch (or any bramnch)
  3. Pushing a new git tag
  
 By default Bitrise will trigger for each new commit and pull request, but you can customize this behaviour.

- Stack

Here you can define which version of Xcode and mac OS will be used for the CI/CD build.

- Bitrise.yml

This is the generated configuration file with everything you have set up in the previous screens. You can also edit this file directly if you prefer.

- Add the webhook

In the code section you will find the webhook set-up area. Bitrise can set it up automatically or it can be setup manually by pasting the provided bitrise webhook url inside the appropriate section on Github, Gitlab or Bitbucket. The automatic set up doesn't always work so if you receive an error you will be fo0rced to proceed manually. The process is pretty straightfoward: copy the Bitrise link and paste it in the relevant section on your Git host service.

For Gitlab go to Settings -> Web Hooks -> add the url to the URL field and select the events you want to ping the webhook with.
For Bitbucket go to Settings -> Webhooks -> Create Webhook -> add the url to the URL field
For Github go to Settings -> Webhook -> Add webhook -> add the url inside the payload section of the URL field

## Platform Specific Workflow

Most of the shared setup is explained in the "Website Section", the platform specific sections will mostly cover the workflow section.

### iOS Application Setup



### Android Application Setup



## Conclusion

While we are not using Bitrise for Continuous Deployment, all our deployments still happen manually, we can be confident that each time we push a new commit or open a pull request the app will build and pass all tests so anybody can clone it without worries.

Source
[Webhooks setup][1]

[1]: https://github.com/bitrise-io/bitrise-webhooks#gitlab---setup--usage
