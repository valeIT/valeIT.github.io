---
layout: post
title: Comments Still Off
date: 2017-12-22 19:00:55.000000000 +01:00
type: post
published: true
status: publish
categories: [Me]
image: /assets/article_images/pexels-photo791398.jpeg
image2: /assets/article_images/pexels-photo791398.jpeg
author: Valentino Urbano 
---

I have [already](/comments-off/) [discussed](/more-on-comments/) the matter of comments two years ago, when  I first opened this blog on another domain, so I'm not going to repeat myself further. 

For the purpose of this post suffices to know that they've been off from the beginning and that I haven't changed the settings ever since. Beginning last month though I started getting spam messages in the comment moderation queue, even though I don't have a place to submit comment anywhere. 

>Comments
>All | Pending (23) | Approved | Spam (0) | Trash (0)

Ten of those are just [trackbacks](http://en.wikipedia.org/wiki/Trackback), but the others are mostly post saying 'hi' or 'check my site' and such, typical spam comments. The only explanation is that a server somewhere is using the WordPress API:

<pre><code> POST /sites/$site/posts/$post_ID/replies/new</code></pre>

It seems like it only requires the <code>$post_ID</code> -> easily obtainable with a scraping bot and the <code>$site</code> -> site domain and your API Token <code>($YOUR_API_TOKEN)</code>, guess it's the application token and not a token to log to your site. 

As example they provide this:

<pre><code>
> PHP

><?php
 
>$options  = array (
  'http' => 
  array (
    'ignore_errors' => true,
    'method' => 'POST',
    'header' => 
    array (
      0 => 'authorization: Bearer YOUR_API_TOKEN',
      1 => 'Content-Type: application/x-www-form-urlencoded',
    ),
    'content' => http_build_query(   
      array (
        'content' => 'Your reply is very interesting. This is a reply.',
      )
    ),
  ),
);
 
>$context  = stream_context_create( $options );
$response = file_get_contents(
  'https://public-api.wordpress.com/rest/v1/sites/30434183/posts/1222/replies/new/',
  false,
  $context
);
$response = json_decode( $response );
 
>?></code></pre>


**Edit:** The last spam comment in the moderation queue is from "2015/01/31 at 5:57 am" and I haven't changed anything.

Update 02-01-2015:
It got better, there hasn't been a single new spam comment awaiting moderation for months now, on both site. I guess they got the message that comments are off. Good.

Reminder: If you wanna comment, [send me a tweet](https://twitter.com/valentinourbano).

Update 2018-01-01:
I moved to octopress so I don't have comments at all anymore, not even though an hidden page / webservice.   
Update 2018-02-07:
I have [comments back on][0], with limits.

[0]: {% post_url 2018-02-07-Comments-Back-On %}