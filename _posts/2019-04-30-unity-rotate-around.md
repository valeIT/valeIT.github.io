---
layout: post
title: Unity - Rotate Around An Object While Maintaining Your Current Direction
date: 2019-04-30 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

The best way to rotate around an object is to use the built in method RotateAround passing in the radius you want your circle to be. Using rotate around on an object to make it rotate around a different object doesn't automatically fix the direction your object is facing though. It will keep the object as it is and just move it to rotate around without preserving any of your axes.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yPX57_cbmIs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The object will correctly rotate around the direction is facing won't be updated. If you just need to look at the object you are rotating around you can simply call LookAt() to look at it at that's it. If you need to face the direction you are moving towards (the forward direction) it is a bit more difficult.

After calling rotate around
```
//lookat
var dir = -(center.position - transform.position);//you might not need the - in the beginning depending how your scene is setup
var angle = Mathf.Atan2(dir.y, dir.x) \* Mathf.Rad2Deg;
transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);//here you need to use the same axis you use in the rotate around method. If you use .forward use it here as well.
```


The last option is that you don't want to face anything at all, but keep the initial rotation that you had before starting to rotate around the object. In that case, you can save the object rotation before calling rotate around and set it back to the transform.rotation right after. You will keep rotating around the object while keeping the initial position intact.

```
var rotation = transform.rotation;
            transform.RotateAround(center.position, Vector3.forward, rotationSpeed * Time.deltaTime);
            transform.rotation = rotation;
```