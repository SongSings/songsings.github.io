#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

msg="init commit"
#git init
#git add -A
#git commit -m "${msg}"
git push -f https://gitee.com/luckyson/docs.git master:dev

cd -
rm -rf docs/.vitepress/dist