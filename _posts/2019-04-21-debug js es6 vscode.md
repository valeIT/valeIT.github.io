---
layout: post
title: Debug Javascript (Babel) ES6 From VSCode Using Breakpoints
date: 2019-04-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---
<!-- ## Debug (Babel) ES6 From VSCode Using Breakpoints -->

**Stop debugging with console.log and start using breakpoints.**

I'm working on a vanilla JS project (without using any frameworks), but I couldn't renounce to use ES6 in it, it's just so useful over plain JS. That means that I had to compile my code since unfortunately not all browsers support ES6 yet, but we're getting closer. The problem is that I also wanted to debug using VSCode on my ES6 files. I got so used to debugging in VSCode with every single language I use that it just become second nature to go to debug and press run to start the application.

This time nothing happened at first. After setting up the configuration file for JS I managed to get the debugger running (also thanks tothe instruction on the VSCode page), but behold, it was only finding the compiled files and not the original ES6 files. I wanted to set the breakpoints in my original files while the browser would execute the compiled file. Some more setup was needed to make that work.

This process only works for [Chrome][0] since it's the only officially supported channel. There are similar extensions for [Firefox][1] and [iOS Safari][2] if you prefer those, but they're not officially supported so they might still have a few more bugs than the Chrome version.

The second part of the article (coming tomorrow) goes into the installation and configuration process. It is not particularly lengthy, but there are a few things to keep in mind.

----part 2----

1. Install the [VSCode extension][3] and activate it
2. Open your project and add the following configuration in your launch.json file. If you don't have such file create a .vscode folder in your current project root folder (or open it if the folder already exists) and create anew file called launch.json:

```
{
"name": "Launch localhost",
"type": "chrome",
"request": "launch",
"url": "http://localhost/serverAddress",
"webRoot": "${workspaceFolder}",
"userDataDir": true,
"smartStep": true,
"disableNetworkCache": true,
"showAsyncStacks": true,
"skipFiles": ["node_modules"],
"outFiles": ["${workspaceRoot}/build/js/*.js"]
}
```

In "URL" instead of serverAddress put the subfolder of your project. In "webRoot" put the location of the folder corresponding to the "url". In "skipFiles" you can add an array of files to ignore (the debugger won't stop for error, warnings in those files). And finally, in outFiles, you can put the location of your output files.

If you want to set breakpoints in VSCode that's all you need.

There is one small caveat before you can try it out for yourself. If your compiler is not generating any source maps, your breakpoints will only work if you set them up in the files generated (compiled) by babel and not in the original js files. So each time you would need to write the change, compile it, look where it ended up in the compiled file, set the breakpoint there and finally run it. How do we fix it?

We change the babel configuration to generate source maps. Simple as that. In your package.json edit the build and watch command so they generate source maps too:

```

"scripts": {

"build": "babel src/js --source-maps --out-dir build/js",

"watch": "babel src/js --source-maps --watch --out-dir build/js"

},

```

That's what you need to debug your javascript code in Chrome through VSCode. In the next section we are going to cover a few more caveats that you might run into.

# Caveats

The extension mostly works out of the box (after the not so quick configuration process illustrated above), but there are a few things to keep in mind so if something is not working properly or if you feel that something is off you can try the followings:

1. Make sure to always launch Chrome from the extension and never manually

Chrome needs to be launched with remote debugging enabled. The VSCode debugger already takes care of that for you. Make sure not to use multiple tabs for debugging. You can open more than one tab, but the tab attached to the debugger (the first tab) needs to stay open otherwise the remote debugger might de-attach and you would be forced to restart Chrome to reattach it.

2. The debugger supports the "yarn watch" command line argument so if you have "yarn watch" running in a terminal window it will keep rebuilding the site and every time you edit a file and save and the debugger will be working properly. You can then just reload the page and it will stop at the correct breakpoint. While doing that make sure that the breakpoint didn't move if you edited the source file and recompiled it though.

<!-- [3]: https://github.com/Microsoft/vscode-chrome-debug -->

[0]: https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code
[1]: https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug
[2]: https://github.com/Microsoft/vscode-ios-web-debug
[3]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
