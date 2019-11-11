---
layout: post
title: Unity Space Simulator - Rotate Around VS Physics Based Approach
date: 2019-11-04 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

[This is part 2 of my Unity Space Series. You should first read part 1 if you haven't already][1].

Recap: I'm playing around with Unity and I wanted to create a ship that would move through space until it got close enough to a planet. When that happened the ship would be attracted by the planet's gravity and start falling onto it.

In Unity there are 2 ways to do it. One using physics and the actual gravitational force of the planet against the gravitational force of the ship, another handling everything manually. We discussed how to implement the second one in the [previous article][1]. After way more testing I can confirm the approach that I took as being the best for my specific use case and wanted to weight the pros and cons of both methods.

## Using Physics

Using Physics the end result is way more realistic, so if you're going for a space simulation feel this is the route you should take. Hands down.

The problem I had was that the force applied was outside of my control. I could control the speed of the ship to keep it in orbit, but if I wanted to do something more custom I could not. Using physics gravity would always act on the ship so some ideas were not possible to implement with this system given the time constraints.

## The Manual Way

Using the function rotateAround is way less realistic, but I can have fine tuned controls over everything since I'm not using physics at all. I'm controlling the ship frame by frame and having access to everything along the way without any external force outside my control to change the balance of forces.

The way to simulate a simple approach onto a planet is to gradually reduce the radius of the rotation until it falls below a certain threshold and to adjust the speed of the ship accordingly. When the threshold gets passed it means that the ship had passed the point of no return where it can't escape the orbit and it is bound to fall/land on the planet.

There is not a right or wrong solution to this problem, both of them are compromises that will heavily depend on what kind of game you are developing and what kind of feel you want it to have.

[1]: {% post_url 2019-04-30-unity-rotate-around %}
