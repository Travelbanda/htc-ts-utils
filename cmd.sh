#!/bin/sh

yarn

VERSION=v`node -p "require('./package.json').version"`
echo $VERSION

git commit -am $VERSION
git push

npm publish
