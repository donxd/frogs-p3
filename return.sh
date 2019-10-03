#!/bin/bash
git checkout master
rm -rf node_modules/
mv node_modules.bak node_modules
echo "return - done"