# Migrating to Gitlab

Github Pages does not support merges from bots. I've set up a highly automated system to be able to publish with ease just to find out that there is no way to tell GitHub to build your website when a bot merges something into master.

This is totally unacceptable and breaks the whole premise of what I was trying to do.

Gitlab Pages with Gitlab pipelines supports automatically pulling a GitHub repository and building it at each new commit. Exactly what I need. All the code will stay on GitHub to use its better ecosystem of plugins and bots, but the website will be server from GitLab. I've already migrated the DNS records to point to GitLab server, it will take up to 24 hours for it to propagate and the website might be down for this period.