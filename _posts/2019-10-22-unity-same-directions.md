---
layout: post
title: Unity Show Enemies In The Same Directions
date: 2019-10-22 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I'm working on a basic targeting system for a 2D game. I want to automatically see enemies only if they're in my angle of view, in a cone in front of me.

Before this I was using a distance (sphere) based system so I would see enemies behind me as well.

Doing this kind of targeting is easier than you might think It is sufficient to calculate the difference between your forward angle and the target. In my case the forward angle corresponds with the .up direction, but yours might be .forward since that's the unity standard forward direction so you would need to change all occurrences of .up to . forward in the following snippet (or whatever direction your forward direction is).

```
    Vector3 dir = (target.transform.position - transform.position).normalized;
    float direction = Vector3.Dot(dir, transform.up);//1
    if (direction > 0.35)//2
    {
        //3
        //around same direction
        print("same direction");
    }
```

1. Your forward direction
2. The closest to 1 is the more it's facing us. 1 is right in front of us. I have picked .35 which seemed a right angle, but you can tweak that value as well.
3. Inside the if you can do what you want. I'm simply hiding or showing the renderer of the target since I have relatively few objects in the scene.
