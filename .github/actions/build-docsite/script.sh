#!/bin/sh

set -e # Exit with nonzero exit code if anything fails

# Setup
npm install -g gitbook-cli@2.3.0
# npm install -g aws-cdk
# pip install awscli

make
sleep 1

# Dont think this is necessary as out/ is never used in deploy.yaml but dont want to break it
cp -a _book/. out/

# cd ./lambda
# yarn install
# yarn build
# cd ../
#
# cd ./lambda
# yarn test
# cd ../
#
# cd ./lambda
# cdk deploy
# yarn deployLambdaEdge
# cd ../
