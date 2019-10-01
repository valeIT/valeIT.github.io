---
layout: post
title: Create a Minimap Using Unity
date: 2019-09-30 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
# Create a Minimap By Adding An Additional Camera

This method is the easiest way to create a minimal minimap. It is rather basic so it won't support every single use case, but it is a good starter point. And for a lot of game types you won't really need anything more than this.

*This is going to assume that you know your way around Unity.*

- Duplicate your main camera.
- Select it and change it to ortographic. Edit the Size from the inspector so that the whole area you want the minimap to show is visible from this camera (you can select the camera to toggle the preview).
- CHange the background from Skybox to Solid Color since we don't want to show the sky as the background of the minimap. Set it to whatever color you wish, usually black would do it if you're not sure.
- Make sure the tag of the minimap is not MainCamera. I usually leave it as untagged, but you can create a custom tag for it if you want/need.
- Use the clipping planes from the inspector to hide objects that are too far or too close to the camera to be shown (if needed). For example you could hide everything that is not in the range of sight, just be mindful that this will apply indiscriminately to every object in the scene (and not only to the enemies for example).
- Set the depth of the camera so it is not behind other objects. If you left everything as default setting it to 0 will show it in front of everything.