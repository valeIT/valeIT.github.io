---
layout: post
title: Integrate Freshdesk in SpriteKit
date: 2015-06-30 20:13:43.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

\[This is not a sponsored post, I just love the service.\]

I use Freshdesk as Support Portal for all of my iOS apps. They have a nice framework that you can integrate in your apps to provide a Knowledge Base to your users from inside the app on top of the ability to open a ticket (and automatically include debug informations).

The framework though needs an UIViewController to work. I wanted to present it from a SKScene.

All SKScenes are inside the main ViewController of the app (the default name for it is GameViewController). You just create a reference of it in your scene and use that to present the support panel.

From GameViewController, right before presenting your SKScene:

    
    let scene = MainMenu()
    let skView = self.view as! SKView
    
            scene.scaleMode = .ResizeFill
            scene.anchorPoint = CGPointMake(0.5, 0.5)
            scene.size = skView.bounds.size
            scene.viewController = self//passing a reference of the controller to your scene
            skView.presentScene(scene)
    

From you MainMenu, in touchesBegan:withEvent:

    
    if spriteNode.name == "support" {
                                  Mobihelp.sharedInstance().presentFeedback(self.viewController)
                              }