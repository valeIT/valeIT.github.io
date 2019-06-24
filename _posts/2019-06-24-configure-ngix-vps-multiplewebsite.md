---
layout: post
title: Setup Multiple Websites on the same Server, VPS or Droplet
date: 2019-06-24 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

Nginx supports running multiple domains on the same server. Firstly you set up the DNS from your register (or CDN) to point to the same machine where your server is running.

Then you tell the server which specific folder to serve for each domain.

This works if the websites have a limited amount of traffic. Once the traffic exceeds a certain threshold (based on the capability of your server/VPS) you need to move it to a dedicated machine.

For this example I've already everything set up for my main website valentinourbano.com and I want to copy all of its configurations over to serve a different domain as well. I'm going to use the following placeholders. You should change the site with the domain (without the tld) so valentinourbano for example. Change the tld to your tld for example .com. The user is the account that should have permissions to read the files, in my case I have an account set up as valentinourbano. If you already have a server already setup you can check the username to use by running ls -l on the folder and check the owner and group permission setting for the specific file you want to copy and make sure to match both on your copied file.

```
$NEWSITE = "SITE"
$TLD = "TLD"
$USER = "valentinourbano"

sudo cp /etc/nginx/sites-available/valentinourbano.com /etc/nginx/sites-available/$NEWSITE.$TLD

sudo nano /etc/nginx/sites-available/$NEWSITE.$TLD
```
You have now created the configuration for the new url. It is time to create the folder for the files to be served for your new website and point the server to it.

```
sudo mkdir -p /var/www/$NEWSITE.$TLD/html
sudo chown -R $USER:$USER /var/www/$NEWSITE.$TLD/html
sudo chmod -R 755 /var/www/$NEWSITE.$TLD
nano /var/www/$NEWSITE.$TLD/html/index.html
```

This is just a basic HTML example to show that the server is working and it is serving the correct folder for the URL.

```
<html>
    <head>
        <title>$NEWSITE.$TLD</title>
    </head>
    <body>
        <h1>$NEWSITE.$TLD</h1>
    </body>
</html>
```

To be able to see the website you need to enable it, by moving it from the available sites to the enabled ones:
```
sudo ln -s /etc/nginx/sites-available/$NEWSITE.$TLD /etc/nginx/sites-enabled/
```

After enabling it you need to restart the server for your changes to be loaded.
```
sudo systemctl reload nginx
```

The next step is optional. If you don't need PHP you can leave it disabled.
Firstly create a file to check your php configuration. Remember to remove it after you've finished the setup so as not to expose sensitive information about your server to everyone.
```
sudo nano /var/www/html/info.php
```
Edit the generic configuration file if you've never used php on this matching, or the site configuration file to it for this specific site.

Change the base URL to point to index.php instead of index.html if your main file is a php file. You can also change it to a subfolder if you want to serve content from a subfolder.
```
sudo nano /etc/nginx/sites-available/default
```

Check your configuration
`sudo nginx -t`
Restart the server to load the changes:
`sudo systemctl reload nginx`











<!--





## Install https

Installing https is really easy and straightforward. If you're using a CDN like cloudflare you can do it directly from there, otherwise (or if you prefer more direct control) certbot is a great and easy way to get a free certificate from let's encrypt.

```
sudo add-apt-repository ppa:certbot/certbot
sudo apt install python-certbot-nginx
```
Check your firewall to ensure that the https ports are open and https traffic is allowed:
`sudo ufw status`

If it's not enabled enable it:
`ufw allow https`
Check the status again to confirm the new rule. You should not need to reload ufw for the rule to be active.

Generate a new certificate. This will take care not only of the generation process, but also to update your nginx configuration file to serve your site using https
```
sudo certbot --nginx -d $NEWSITE.$TLD -d www.$NEWSITE.$TLD
```

## git hooks

The last thing to do is to setup git hooks. This way your website gets automatically updated and rebuilt every time you push a new change to a specific git repository. There are multiple ways to do this. I'm going to show the manual way, but if your website is not as complicated you can more easily do it using [Netfily](https://www.netlify.com).

First you need to set up a folder for your repository. This folder needs to be outsite of the domain of your webserver so that it is not available on the web. As an example I've set it up on /var/.

Set up a new, or existing git repo and add the remote if you have one.
```
cd /var/repo
mkdir MYWEBSITE.git && cd MYWEBSITE.git
git init --bare
```

Set up the hooks to do whatever you want once you get a new commit (in this case):

```
cd hooks
touch post-receive
nano post-receive
```
The content of the file is as follows. Make sure to change MYWEBSITE to your website url.

```
#!/bin/sh
git --work-tree=/var/www/MYWEBSITE.com --git-dir=/var/repo/MYWEBSITE.git checkout -f
```

Lastly set the correct permissions so that the hooks can run correctly:
`chmod +x post-receive`

If you have a remote you can have a second webhook to get notified each time the remote repository changes so that you can `git fetch && git pull` all the changes before building the website. Fpr now, not to overcomplicate the setup to much we are just going to pull the changes once a day without webhooks. You can obviously increase or reduce this timer, but this is far from an ideal solution (the ideal being webhooks).

.......
save key in /home/USER/.ssh
allowed_keys ??
set it up on the git remote as allowed key
create a cron_daily to cd to repo and git pull
the git hook will take care of the rest after the pull succeeds
......... -->