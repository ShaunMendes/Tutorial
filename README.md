# Tutorial

-m to add message

git config --global --edit to edit global git config
git config credential.helper store to cache your username and password

git add &lt;filename&lt; to add file to staging
git add . to add all changed files to staging

git rm cached &lt;filename&gt; to remove file from staging
git rm cached . to remove all newly added gitignore files from repo

git commit -m "&lt;message&gt;"

git log shows history of all the commits
git log --oneline summary of commit logs in 1 line

git checkout &lt;commitId&gt; to remove particular commit
git checkout &lt;branchname&gt; to siwtch to a particular branch

git revert &lt;commitId&gt; to revert to state before that particular commit,
However it doesnt delete that particular commit, it creates a new commit
with revert appened to it. Hence we dont loose any data and still have access
to deleted commits.

git reset &lt;commitId&gt; to revert to state before that particular commit and delete all prev changes of other commits

git branch &lt;branchname&gt; to add a new branch
git branch -a to view all branches
git branch -d &lt;branchname&gt; to delete a branch once it is merged with master
git branch -D &lt;branchname&gt; to delete an unmerged branch
git checkout -b &lt;branchname&gt; to create and switch to particular branch at the same time

git checkout master
git merge &lt;branchname&gt; to merge branch with master

git status for tracking changes to branch

git remote add &lt;aliasname&gt; &lt;reponame&gt;
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git #to change remote url to ssh

git push &lt;reponame&gt; &lt;branchname&gt; to push your project to remote repo

git pull &lt;aliasname&gt;/&lt;reponame&gt; &lt;branchname&gt; to pull changes from the remote repo
