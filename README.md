# Storm-the-Front 
The portal / website for Gomel Front-end developers community "Storm The Front".

# Everybody is welcome to contribute, be it completing tasks or opening the new ones!
Feel free to create branches in this repo (but beware, after PRs they will be removed without pity, unless labeled properly).
Also, you can create forks and open PRs from your own forks, that works, too. Again, beware, forking won't save your branches from being ruthlessly deleted after merging PRs, unless labeled properly!

# The developer's guide:
We will be using a common GitFlow strategy for our development cycle, with some changes.
1) Instead of merging branches, we'll use rebase (DO NOT REBASE A PUBLIC BRANCH!) and fast-forward merge;
2) All merges should be done using git's SQUASH AND MERGE option. It will allow us to keep clean straight history and train your rebase skills :)
3) Please, after merging, delete unused branches. Mark the branches, which are required, with corresponding labels;
4) Your code is eligible to PR if:
  a) a feature is complete
  b) a bug is fixed
  c) a new independent functioning piece of code is being merged

Rebase and merge instructions:
1) Before opening your PR, pull the latest changes of the parent branch.
2) Rebase your branch on top of your parent branch.
3) Resolve conflicts if any.
4) Open a PR.
Quite often you'll face a situation, when an already opened PR faces conflicts. In that case, perform the steps above and just force push your branch, git will catch up all the changes.

I'll open a separate issues, where you can earn extra points, by commenting on the pros and cons of such approach ;)
