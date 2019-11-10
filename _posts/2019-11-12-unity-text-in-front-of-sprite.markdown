---
layout: post
title: Unity - Text in Front of 2D Sprite
date: 2019-11-12 19:49:33.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
author: Valentino Urbano
---

A text object to be able to be placed as children of a sprite (so not on the typical UI canvas) needs to be a `Text Mesh` (create an empty object and add the Text Mesh as component), unfortunately it doesn't fit well with sorting layers.

I've read multiple forums and none of the single answers there worked for me. I had to combine a few of them together to make it all work.

First add a new sorting layer and place it in front of the default, I called it "TextElement".

Note: Your text needs to be a children of the sprite.

Add a new script to the text:

`LayerIDHandler.cs`

```
 using UnityEngine;
 using System.Collections;

 public class LayerIDHandler : MonoBehaviour
 {

        void Start ()
 {
     this.GetComponent<Renderer>().sortingLayerID =
     this.transform.parent.GetComponent<Renderer>().sortingLayerID;
 }
 }
```

And another:


`SortingLayerExposer.cs`

```
 using UnityEngine;
 using System.Collections;

 public class SortingLayerExposer : MonoBehaviour
 {

         public string SortingLayerName = "Default";
         public int SortingOrder = 0;

         void Awake ()
         {
                 gameObject.GetComponent<MeshRenderer> ().sortingLayerName = SortingLayerName;
                 gameObject.GetComponent<MeshRenderer> ().sortingOrder = SortingOrder;
         }
 }
```

And add both to the text.

In the transform (don't think this step is needed since it'll be set by the script, but still) set the Z to 10.

That's it, now your text should show in front of the sprite. If it doesn't check both your sprite and the main camera, they should be on the "Default" layer and both have a Z less than 10.


Source:
[Unity](https://forum.unity3d.com/threads/using-non-sprites-with-the-new-sorting-layers.211822/) [forum](http://answers.unity3d.com/questions/575342/how-to-draw-text-over-sprite.html)
