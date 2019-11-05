#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
TARGET_BRANCH="stop-gap-v2"

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

# Build the site
doCompile

# install lambda dependencies
installAndBuildLambda
# Test lambda
testLambda


#If it is the target branch and NOT a pull request, then deploy 
if [ "$TRAVIS_BRANCH" == "$TARGET_BRANCH" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]
then
  
  # deploy the site to s3
  aws s3 sync ./out/ s3://stop-gap --delete
  
  # deploy the lambda function
  deployLambda

  # Clear the cloudfront cache
  aws cloudfront create-invalidation --distribution-id E2DJMH5LKMGQA6 --paths "/*"
  printf "%s\n" "master branch"
else

  # do nothing, and leave s3-deploy post script handle deployment.
  printf "%s\n" "another branch"
fi

# "$TRAVIS_PULL_REQUEST" != "false"