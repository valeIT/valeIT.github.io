---
layout: post
title: Migrating to Github Actions
date: 2023-03-12 16:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Writing, Programming]
image:
image2:
author: Valentino Urbano
---

Travis CI used to be free for open source projects, but no more. Now it requires a credit card even for the open source "free" plan on top of having more limitations. Needless to say, we need a new solution.

There are some alternatives, but since I'm already doing 99% of the website workflow on Github itself I thought it would be nice to consolidate onto it even further (since Github is not going anywhere). This way I won't have to giggle between countless different platforms for each phase of the workflow and everything will be done and monitored in one place.

## Automatic Build Using Github Actions

[In 2019 Github has added CI/CD to Github Actions][1], I had never used it before, but the setup is pretty similar to travis (or any other CI/CD platform) so it should be pretty straightforward to migrate over. The only thing we need to migrate is the .yml file.

The difference between the old travis setup and the new Github setup is very small since the workflow for this repository was fairly basic: Simply check if the website builds ok after each PR change.


This is thee old code from the now defunct travis.org:

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

This is the equivalent code for Github. Note that I'm limiting the trigger to only run for pull requests since Github already has a separate automatic deploy action for pushes to master that deploy the website to Github Pages.

```
name: Build Website

on: [pull_request]

permissions:
  contents: read

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        ruby-version: ['2.6']

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

The yml file needs to be added inside the .github folder and pushed to master before being triggered by a subsequent PR or it won't run.

## Automatic Labeling of Pull Requests

I also took them time to update the setup for the original [CI][2] by fixing the non functional labeling action to be able to automatically add a label to any PR once it is opened, so you don't have to do it manually.

First you need to add a `labeler.yml` inside of the .github folder with the label you want to add.

```
mergeWhenPassing:
- '**/*.md'
- '**/*.*'
```

Lastly we need to add a second `labeler.yml` file in .github/workflows with the actual workflow to run:

```
name: "Pull Request Labeler"
on:
- pull_request_target

jobs:
  triage:
    permissions:
      contents: read
      pull-requests: write
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        sync-labels: true
 ```

For example here we added a default label to any PR that merges it to master (and starts the deploy) once all the checks have passed (automatic checks + at least 1 manual reviewer approval).

## Branch Protection Rules

We also need to update the branch protection rules for the master branch to use the new github actions instead of travis to know when the PR is ready to be automerged. Just delete the existing travis action and type the name of your new Github action instead (here I had to select the action with the specific ruby version in the title, otherwise it would not work). Also you can select a lot of other rules that were not available previously.

## Conclusion

Now it's even better than before!

Everything is automated. From setting the label on PRs, to blocking merging if it's marked as WIP, to assigning the reviewers, to confirming that it builds before allowing a merge, to finally mergining the branch automatically once it's approved and all the check pass on top of automatically build and deploy the website once the PR is merged onto master.


[1]: https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/?WT.mc_id=devto-blog-yolasors
[2]: {% post_url 2019-10-19-Treating-My-Blog-Like-A-Production-Application %}
