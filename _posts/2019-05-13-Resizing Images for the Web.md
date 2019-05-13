---
layout: post
title: Resizing Images for the Web
date: 2019-05-12 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image: /assets/article_images/chuttersnap-496714.jpeg
image2: /assets/article_images/chuttersnap-496714.jpeg
author: Valentino Urbano
---

<!-- If you're using any kind of images on your website  -->
If [like me][0] you started using stock photos on your website, you might notice they're all (rightfully) full sized as you download them, but when you upload them to your blog you don't want your users to download a 10 MB file just to serve a medium sized image on a webpage. Before uploading it to your website you need to rescale it.

On Mac it's really easy if you have familiarity with the command line. The first step is to install [ImageMagick][1]. It's a command line utility to work on images, it can resize and convert images, or even create gifs from videos.

To install it is as easy as doing `brew install imagemagick`. Obviously you need to have [brew installed][3].[^1]

Use it to resize images. I generally use it on a single image at a time like this:

`convert -strip -interlace Plane -sampling-factor 4:2:0 -quality 85% test.jpeg result.jpg`

You can play a bit with the quality. In my test it looked pristine up to 50%, so to have even more compression you can easily go down to 75/70%.

[^1]: The link is to a guide on installing the Dart programming language, but in the beginning of the process you get to install brew. You can stop there if you're not interested in installing Dart as well.

[0]: {% post_url 2018-02-07-Comments-Back-On %}
[1]: https://www.imagemagick.org/script/index.php
[2]: https://brew.sh/
[3]: https://learningflutter.net/install-dart-macos/