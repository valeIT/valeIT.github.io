---
layout: post
title: Migrating A Jekyll Site to Gitlab
date: 2019-11-03 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

*If you have not, [read the previous post][1] about the issue.*

Github Pages does not support merges from bots.

I've set up a highly automated system to be able to publish with ease just to find out that there is no way to tell GitHub to build your website when a bot merges something into master.

This is totally unacceptable and breaks the whole premise of what I was trying to do.

Gitlab Pages using Gitlab pipelines supports automatically pulling a GitHub repository and building it at each new commit. Exactly what I need. All the code will stay on GitHub to use its better ecosystem of plugins and bots, but the website will be served from GitLab. I've already migrated the DNS records to point to GitLab server, it will take up to 24 hours for it to propagate. The website might be down for this period.

## Setting it up

You first need to create a new repository and call it `USERNAME.gitlab.io` if you want it to be served at the main URL and not from a folder.

Create a new file at the base of your project called `.gitlab-ci.yml` and add:

```
# https://gitlab.com/help/user/project/pages/getting_started_part_four.md
image: ruby:2.3

before_script:
  - bundle install

pages:
  stage: deploy
  script:
  - bundle install
  - bundle exec jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master

```

This will tell gitlab to automatically build every commit on the master branch using jekyll. Go to the pipelines page in Gitlab after the first commit that includes this file to check if the shared Gitlab runner is correctly building the website. If it's not, check the error message. One possible reason might be that the ruby version at the top of the file is not correct.

After it has finished building wait 30 minutes. After that time your site should be accessible at `USERNAME.gitlab.io`. If it is not check Settings > General > Visibility and toggle visibility for Pages to Everyone.


[1]: {% post_url 2019-11-02-github-pages-automatic-building-problems %}