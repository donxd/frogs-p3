#!/bin/bash
rm -rf build/
polymer build
mv build/deploy ./deploy
rm -rf build/
git checkout gh-pages
rm -rf images/ index.html
mv deploy/* ./
rm -rf deploy/
mv index-deploy.html index.html
echo "done"