---
layout: post
title: Step By Step Guide On How To Release An Update To Your Laravel Application
date: 2019-02-01 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

I haven't found a really straightforward way to update the Laravel application that powers [markdown.love][0] apart from using Laravel's paid service.

Let's see how to do it manually:

1. Put the site in maintenance mode.
   First, you would need to put your site into maintenance mode by running `php artisan down`. You can put it back up once finished with `php artisan up`.

2. Edit the files.
   You can use any FTP client (or git) to upload your updated files to the server. Once they're up, check to make sure that the permissions and the owner of the file didn't change and that both apache and php can open it.

3. Clear and rebuild the cache.
   Run the following commands to completely clear the cache. If you only edited a view you can only clear the view cache and so on.
   php artisan cache:clear
   php artisan view:clear
   php artisan route:clear
   php artisan clear-compiled
   php artisan config:cache

4. Put the server back up.
   Run `php artisan up` to put your server back online.

The next step would be to automate the process. If you're using git (you should) you can have a page on your server that gets notified each time there is a new commit to a specific branch and automatically starts the deploy process. Both [Github][1] and [Gitlab][2] have an extensive documentation on the matter.

[0]: https://markdown.love
[1]: https://developer.github.com/webhooks/
[2]: https://docs.gitlab.com/ee/user/project/integrations/webhooks.html
