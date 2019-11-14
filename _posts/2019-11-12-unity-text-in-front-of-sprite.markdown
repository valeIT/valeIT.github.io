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

I wanted to have some text on top of a certain sprite in the world which would move alongside it. The most basic way to set up a label in Unity is to use the canvas, but it won't do it here since the text is not an overlay, but it is part of the game world.

The first thought would be to have the text object be placed as child of the sprite so that it follows the sprite position as it moves around the scene. This way we avoid using the canvas and having to synchronize the position on the canvas with the position of the sprite on screen which would be a total nightmate.

The text object needs to be of type `Text Mesh`. You can make one by creating an empty object and adding the Text Mesh as component from the inspector. It moves with the sprite as expected, unfortunately it doesn't behave well with sorting layers.

I've read multiple discussions online and none of the many answers solved the problem for me. I had to combine a few of them together and add a few things to make it all work:

First add a new sorting layer and place it in front of the default layer, I called it "TextElement".

Note: For this method to work your text needs to be a children of the sprite. So if you haven't already drag it on top of the sprite to make it a children.

Add a new script to the text element:

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

This will force it to have the same sorting layer of its parent (the sprite).

Add a second script to set the name and the order to the sorting layer for the child:

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

Drag both to the text element.

Select the text's transform and set the Z to 10 since it needs to appear on top of the sprite and not on the same level.

That's it, now your text should show in front of the sprite. If it doesn't check both your sprite and the main camera, they should be on the "Default" layer and both have a Z less than 10.


Source:
[Unity](https://forum.unity3d.com/threads/using-non-sprites-with-the-new-sorting-layers.211822/) [forum](http://answers.unity3d.com/questions/575342/how-to-draw-text-over-sprite.html)
