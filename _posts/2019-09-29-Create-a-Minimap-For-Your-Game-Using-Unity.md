# Create a Minimap Using Unity

This method is the easiest way to create a minimal, it is rather basic so it won't support every single use case, but for a lot of game types it is a great solution.

- Duplicate your main camera.
- Make it ortographic and change the Size so that the whole area you want the minimap to show.
- Make the background to Solid Color and set the color to whatever you wish, usually black would do it.
- Make sure the tag of the minimap is not MainCamera. I usually leave it as untagged, but you can create a custom tag for it if you need.
- Use the clipping planes to hide objects that are too far or too close to the camera if needed. For example you could hide everything that is not in the range of sight, just be mindful that this will apply indiscriminately to every object in the scene.
- Set the depth so it is not behind other objects (if you left everything as default 0 will show it in front).