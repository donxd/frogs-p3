#!/bin/bash
rm -rf node_modules/
mv node_modules.bak node_modules
git checkout gh-pages
echo "return - done"