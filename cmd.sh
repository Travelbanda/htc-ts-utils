#!/bin/sh

VERSION=v`node -p "require('./package.json').version"`
echo $VERSION

git commit -am $VERSION
git push
git tag $VERSION
git push --tags
