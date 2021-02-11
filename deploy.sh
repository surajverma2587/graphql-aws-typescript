#!/bin/bash

rm -rf node_modules
rm -rf dist
rm -rf infrastructure/node_modules
rm -rf infrastructure/dist

npm install
npm run build

npm run copy:files
cd dist/
npm install --only=prod
rm package*.json

cd ../infrastructure
npm install
npm run build
npm run cdk:diff
npm run cdk:deploy