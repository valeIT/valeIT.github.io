---
layout: post
title: Change Direction for Rotate Around in Unity
date: 2019-05-20 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I'm working on a system to [rotate around an object with Unity][2]. Until now it would always rotate in the same direction: counterclockwise. I wanted a rotation based on the approach direction: If I approach from the upper part of the object I would start my rotation from up and continuing clockwise, if I approach from down counterclockwise.
This is very specific to my situation since we're always approaching from the left side, but the general idea can be used in another systems.

```
 Vector3 calculateRotationDirection(Vector2 orbiterVelocity, Transform orbiter, Transform center)
  {
    Vector3 toCenter = center.position - orbiter.position;
    float dir = Mathf.Sign(orbiterVelocity.x * toCenter.y - orbiterVelocity.y * toCenter.x);
    if (dir < 0) {
      return Vector3.back;
    } else {
      return Vector3.forward;
    }
  }
```

Later on the result of this function can be used directly to set the rotation:

```
    Vector3 rotationDirection = calculateRotationDirection(rigidBody.velocity, transform, lockedPlanet.transform);

    transform.RotateAround(center.position, rotationDirection, rotationSpeed * Time.deltaTime);
```

I've generalized the function method, but if you have always an object that contains both the Transform and the velocity (for example a RigidBody2D) you can pass that object directly into the "calculateRotationDirection" refactoring it to just take one argument instead of two:

```
Vector3 calculateRotationDirection(RigidBody2D orbiter, Transform center)
  {
    Vector3 toCenter = center.position - orbiter.position;
    float dir = Mathf.Sign(orbiter.velocity.x * toCenter.y - orbiter.velocity.y * toCenter.x);
    if (dir < 0) {
      return Vector3.back;
    } else {
      return Vector3.forward;
    }
  }
```

The only problem that remains is that the rotation of the object is not correct. [We've already set it up in a previous article][2], but we need to update it to keep track of the direction we're rotating around. To do that we simply pass in the "rotationDirection":

```
    transform.LookAt(center.position, rotationDirection);
```

Source

[Rotate Around Direction][1]

[1]: https://gamedev.stackexchange.com/questions/167492/how-to-determine-what-direction-an-object-should-orbit-around-another

[2]: {% post_url 2019-04-30-unity-rotate-around %}
