---
layout: post
title: callback on alert dismissal bootstrap - Events
date: 2019-03-26 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---


Most components in bootstrap fire an event when dismissed. You can intercept the event and act accordingly. For this project, I was using jquery sp this example will be based on that, but it is quite easy to convert it to vanilla js (or the framework of your choosing).

The main problem when approaching this is that the official bootstrap documentation on the topic is wrong. It said that you need to look for the "closed.bs.alert" event, but it never gets fired. Instead, you should listen for the "close.bs.alert" event. The same thing applies to most events in bootstrap.

For an alert (toast):

```
$(document).on("close.bs.alert", function() {
  console.log("dismiss toast");
  //do something
});
```

For a modal:

```
$(document).on("close.bs.modal", function() {
  console.log("dismiss modal");
  //do something
});
```

On top of the close event that gets fired when you press on an "X" you can also listen to show and hide events which are more useful for something like a tooltip:

```
$(document).on("hide.bs.tooltip", function() {
  console.log("dismiss tooltip");
  //do something
}) ;
```

Most components in bootstrap will fire these events:

- show
- shown
- hide
- hidden

On top of these, some components have their own custom events specifically for them. For example, the components that have a close button will fire the close event as shown above
