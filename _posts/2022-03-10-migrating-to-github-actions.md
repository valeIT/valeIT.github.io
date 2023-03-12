---
layout: post
title: Migrating to Github Actions
date: 2022-03-10 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

Travis CI used to be free for open source projects, but no more. Now it requires a credit card even for the open source "free" plan on top of having more limitations.

There are some alternatives, but since I'm already doing 99% of the website workflow on Github I thought it would be nice to consolidate onto it (since Github is not going anywhere) and not having to giggle between countless different platforms for each phase of the workflow.

[In 2019 Github has added CI/CD to Github Actions][1]. The setup seems pretty similar to travis, but a manual migration is needed.

The difference between the old travis setup and the new Github setup is very small since the workflow for this repository was fairly basic.


Travis:
```
language: ruby
rvm:
  - 2.4
script:
  - bundle exec jekyll build
env:
  global:
    - NOKOGIRI_USE_SYSTEM_LIBRARIES=true # speeds up installation of html-proofer

sudo: false
```

Github:
```
name: Build Website

on:
  push:
    branches: [ $default-branch ]
  pull_request:
    branches: [ $default-branch ]

permissions:
  contents: read

jobs:
  test:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        ruby-version: ['2.6', '2.7', '3.0']

    steps:
    - uses: actions/checkout@v3
    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: ${{ matrix.ruby-version }}
        bundler-cache: true # runs 'bundle install' and caches installed gems automatically
    - name: Build
      run: bundle exec jekyll build
```


[1]: https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/?WT.mc_id=devto-blog-yolasors

[^1]: I used to have this problem when I woke up at 8:30 and was not able to do everything I wanted to before having to go to work.
[^2]: That does not mean that I do not like what I do at my job. I love my job, but it is still a job.
