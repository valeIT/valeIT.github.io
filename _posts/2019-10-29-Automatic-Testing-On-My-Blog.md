# Automatic Testing On My Blog

[I've written how I'm running my blog as a production application][2] [multiple times][3].

It has now been a few weeks and I like the process. Using bots has been the key. If I had to doo everything manually it wouldn't have been worth.

The main issue is the time commitment more than doubled, but it is still not an unsurmountable amount. Thankfully I've set up a lot of bots to do most of the work, but a few things are still manual.

Since it has been some time I wanted to take a peek at [Travis CI][4], the CI tool I'm using. It spent almost 400 minutes to run test last week alone, thankfully they're free for Open Source applications.

50 builds and test in one day is pretty massive... A lot of that activity is caused by bots, but some are manually triggered as well:

- automatic pull request merging on success triggers a test
- automatic pulling master into every branch that has a PR open triggers a build for each pr
- each push to any branch with an open PR triggers a build

![](/assets/article-images/travis-ci-2019-10-27.png)

[2]: {% post_url 2019-10-19-Treating-My-Blog-Like-A-Production-Application %}
[3]: {% post_url 2019-10-23-Automatic-Pull-Request-Management %}