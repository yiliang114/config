$ cat changeCommit.sh
#!/bin/sh

git filter-branch --env-filter '

# 之前的邮箱
OLD_EMAIL="邮箱"
# 修改后的用户名
CORRECT_NAME="yiliang114"
# 修改后的邮箱
CORRECT_EMAIL="1204183885@qq.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
