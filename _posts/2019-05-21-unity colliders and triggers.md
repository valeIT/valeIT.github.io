---
layout: post
title: When and How to use a Collider or a Trigger in Unity
date: 2019-05-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---
<!-- # unity colliders and triggers -->

Unity uses colliders to detect hits between different objects in the scene. If you have 2 cubes in the scene and you move one of top of the other nothing will happen. If instead you add a collider to both of them they will push each other around instead of stacking. Using a proper collider is a good advice for performance. It won't matter if your scene is small and only has a few gameObjects, but once they start increasing the choice of a more computationally heavy collider will hit your performance hard. On the other hand the choice of a poor collider might make your collision detection less precise or even miss the collision entirely.

You can also receive a callback on collisions so that for example in a shooter you can decrease the HP of the hit target.

```
void OnCollisionEnter2D(Collision2D other)
{
}
```

When you use a collider you have the choice of setting it as a trigger. If you do the collider will no longer react to other colliders, but instead it will act as an event so that you can react to it from code.

An example would be for powerups: I want to know when the player steps on a start so that I can add the power up to the player character. Using a trigger I can implement the function "OnTriggerEnter" or "OnTriggerEnter2D" in case of 2D colliders.

```
 void OnTriggerEnter2D(Collider2D other)
  {
  }
```

For testing purposes I wanted to receive a callback in both cases, simply add the following script to the gameObject you want to track. Create a file called TestCollision2D.cs and paste:

```
using UnityEngine;
using System.Collections;

public class TestCollision2D : MonoBehaviour
{
  void OnCollisionEnter2D(Collision2D other)
  {
    Debug.Log("Player collided hit");
  }

  void OnTriggerEnter2D(Collider2D other)
  {
    Debug.Log("Player collided trigger");
  }
}
```
