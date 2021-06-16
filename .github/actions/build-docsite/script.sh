#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

function doCompile {
  make
  sleep 1
  rm _book/.travis.yml
  cp -a _book/. out/
}

function installAndBuildLambda {
  cd ./lambda
  yarn install
  yarn build
  cd ../
}

function testLambda {
  cd ./lambda
  yarn test
  cd ../
}

function deployLambda {
  cd ./lambda
  cdk deploy
  yarn deployLambdaEdge
  cd ../
}

# Setup
sudo pip install virtualenv
virtualenv my_project
source my_project/bin/activate
npm install -g gitbook-cli@2.3.0
npm install -g aws-cdk
pip install awscli

# Build the site
doCompile

# install lambda dependencies
installAndBuildLambda
# Test lambda
testLambda
