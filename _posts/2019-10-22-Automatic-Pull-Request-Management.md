---
layout: post
title: Automatic Pull Request Management Using Github Bots
date: 2019-10-22 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Publishing My Website Automatically

Rules to merge:

- All tests need to pass
- One reviewer (other than whoever opened the PR) must approve the change

What I wanted to accomplish:
- Minimal Human intervention apart from the review process


# Automatically Choose the Reviewer

In this case there is only one reviewer so the bot didn't have to choose between multiple people based on some rule.

Add the review-bot to the repository and create the `auto_assign.yml` file. Configure it with the content:

```
# Set to true to add reviewers to pull requests
addReviewers: true

# Set to true to add assignees to pull requests
addAssignees: true

# A list of reviewers to be added to pull requests (GitHub user name)
reviewers:
  - REVIEWERNAME

# A number of reviewers added to the pull request
# Set 0 to add all the reviewers (default: 0)
numberOfReviewers: 0
# A list of assignees, overrides reviewers if set
# assignees:
#   - assigneeA

# A number of assignees to add to the pull request
# Set to 0 to add all of the assignees.
# Uses numberOfReviewers if unset.
# numberOfAssignees: 2

# A list of keywords to be skipped the process that add reviewers if pull requests include it
skipKeywords:
- wip
- WIP
```

Change REVIEWERNAME with the account name of the reviewer. Remember to also add the reviewer to the repository as collaborator from Settings on GitHub.

On top of automatically assigning the review it will skip adding reviewers for uncompleted pull requests (marked as WIP).

# Automatic Tests

I'm using Travis CI to automatically test that the website builds and there are no HTML errors using htmlproofer.

After setting up all the necessary rules you can add a bot to automatically merge the PR when everything is passing.

I'm using ranger to automatically merge the PR when passing and delete the PR branch after merging. The only caveats is that you need to set the "merge when passing" label manually.

# Automatic Merging

Once all the tests pass and the reviewer approves I want the change to be automatically merged into master and deployed. GitHub automatically takes care of deploying every single commit from the master branch so the only thing I needed was some way to automatically merge the PR if all the checks had passed.

Thanksfully [Repo Ranger][1] takes care of it. Open [the page][1] and add it to the repository you want it to manage.

Add the file "ranger.yml" in the folder ".github" at the base of your project with the content:

```
labels:
  duplicate: close
  wontfix: close
  invalid: close
  "merge when passing": merge
  "squash when passing": merge
  "rebase when passing": merge


merges:
  - action: delete_branch
```

Once you apply the label "merge when passing" to the Pull Request and all the checks pass the PR will automatically be merged and thanks to "action: delete_branch" the branch will also be deleted.

[1]: https://github.com/marketplace/ranger