#!/bin/bash
rm -rf build/
polymer build
mv build/deploy ./deploy
rm -rf build/
mv node_modules node_modules.bak
git checkout gh-pages
rm -rf images/ node_modules/ frogs-p3.js index.html package.json
mv deploy/* ./
rm -rf deploy/
mv index-deploy.html index.html
echo "done"