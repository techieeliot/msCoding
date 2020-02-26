First command is only the first time. 

## git remote add upstream git@github.com:leviking/legendary-palm-tree.git
## git fetch upstream

remote: Enumerating objects: 42, done.
remote: Counting objects: 100% (42/42), done.
remote: Compressing objects: 100% (36/36), done.
remote: Total 40 (delta 7), reused 23 (delta 0), pack-reused 0
Unpacking objects: 100% (40/40), done.
From github.com:leviking/legendary-palm-tree
 * [new branch]      master     -> upstream/master

## git pull upstream master

From github.com:leviking/legendary-palm-tree
 * branch            master     -> FETCH_HEAD
Updating 5e7b11f..dee3d61
Fast-forward
 .DS_Store                         | Bin 6148 -> 0 bytes
 Brians/create table locations.sql |  26 ++++++++
 Micah/CRUD.sql                    |  29 ++++++++
 garrick/create.sql                |  11 +++
 garrick/delete.sql                |   1 +
 garrick/insert.sql                |  25 +++++++
 garrick/store.sql                 | 129 ++++++++++++++++++++++++++++++++++++
 garrick/update.sql                |   1 +
 levi/levi.sql                     |  86 ++++++++++++++++++++++++
 prototype/Untitled-learning.sql   |  41 ++++++++++++
 10 files changed, 349 insertions(+)
 delete mode 100644 .DS_Store
 create mode 100644 Brians/create table locations.sql
 create mode 100644 Micah/CRUD.sql
 create mode 100644 garrick/create.sql
 create mode 100644 garrick/delete.sql
 create mode 100644 garrick/insert.sql
 create mode 100644 garrick/store.sql
 create mode 100644 garrick/update.sql
 create mode 100644 levi/levi.sql
 create mode 100644 prototype/Untitled-learning.sql
 
## git push origin master
Total 0 (delta 0), reused 0 (delta 0)
To github.com:techieeliot/legendary-palm-tree.git
   ce1b33b..dee3d61  master -> master
