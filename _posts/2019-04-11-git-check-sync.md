#Check if a git remote is synced

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

A lot of people use a fully featured GUI to work with git (Github Desktop, Tower, ...). I also like to use Sourcetree from time to time, mostly to have a tree like view of the history and different branches. More often than not I find myself typing git commands in the command line since I've the terminal already opened to do other development tasks. Something that I found hard to remember at first was how to check changes with a remote branch without merging them since git pull automatically pulls them in. This way to can actually take a look at the changes before you merge them with your local copy.

1. Check if new things in local not committed or new commits to push (without pushing anything):
   git status

2. Check that the remote URL is correct:
   git remote show origin

3. Check that the remote branch has any differences with local (we assume we are on master branch) and list them:
   git fetch
   git diff master origin/master

From there you can manually merge them by running git merge or simply pull them with git pull.
