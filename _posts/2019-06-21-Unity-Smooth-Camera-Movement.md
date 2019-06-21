---
layout: post
title: Smooth Camera Movement in Unity
date: 2019-06-21 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

The most basic camera is a static camera that doesn't move and always records the same area of the canvas. This is what you get when you create a new scene.

The first step forward is to make the camera follow an object in the scene so that as the object moves we keep it in view. This is easily done by pinning the camera to the object you want to follow by dragging it as a child object. This results in the camera closely following the movements of the object. Those movements might be too sudden though and shake and twitch the camera around too much, for example, it would be fast during sharp turns and slow during slow ones. This is not bad, per se, but it will cause the camera to confuse the player on many occasions with its sudden movements.

We usually just want to keep the object in view, but not closely resembling its movements (there are cases in which we do).

The solution is to detach the camera from the object you want to follow and handle its movement from inside a script, this way you can match the object's movement, but also apply some smoothing to make the camera's movement more fluid. You can also tweak how the camera behaves and what level of smoothing it should apply by tweaking the script.

```
public class SmoothCamera : MonoBehaviour {
public float dampTime = 0.15f;
void Update ()
         {
     Vector3 velocity = Vector3.zero;
    Vector3 point = camera.WorldToViewportPoint(player.position);
    Vector3 delta = player.position - camera.ViewportToWorldPoint(new Vector3(0.5f, 0.5f, point.z));
    Vector3 destination = transform.position + delta;
    transform.position = Vector3.SmoothDamp(transform.position, destination, ref velocity, dampTime);
         }
}
```

Controlling the camera using a script also gives you the advantage of not being forced to only follow one object, but to switch point of view if needed by assigning a new target to it instead of the player (as it is in this case).
