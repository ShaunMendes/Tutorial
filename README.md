# Tutorial

-m to add message

git config --global --edit to edit global git config
git config credential.helper store to cache your username and password

git add <filename> to add file to staging
git add . to add all changed files to staging

git rm cached <filename> to remove file from staging
git rm cached . to remove all newly added gitignore files from repo

git commit -m "<message>"

git log shows history of all the commits
git log --oneline summary of commit logs in 1 line

git checkout <commitId> to remove particular commit
git checkout <branchname> to siwtch to a particular branch

git revert <commitId> to revert to state before that particular commit,
However it doesnt delete that particular commit, it creates a new commit
with revert appened to it. Hence we dont loose any data and still have access
to deleted commits.

git reset <commitId> to revert to state before that particular commit and delete all prev changes of other commits

git branch <branchname> to add a new branch
git branch -a to view all branches
git branch -d <branchname> to delete a branch once it is merged with master
git branch -D <branchname> to delete an unmerged branch
git checkout -b <branchname> to create and switch to particular branch at the same time

git checkout master
git merge <branchname> to merge branch with master

git status for tracking changes to branch

git remote add <aliasname> <reponame>
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git #to change remote url to ssh

git push <reponame> <branchname> to push your project to remote repo

git pull <aliasname>/<reponame> <branchname> to pull changes from the remote repo
