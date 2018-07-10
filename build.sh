#!/bin/bash

packageName="htc-ts-utils"

set -e

rm -rf dist

./node_modules/.bin/webpack --config ./webpack.config.js
./node_modules/.bin/tsc --noEmit -p src
./node_modules/.bin/uglifyjs dist/${packageName}.js --output dist/${packageName}.min.js --source-map content=dist/${packageName}.js.map
