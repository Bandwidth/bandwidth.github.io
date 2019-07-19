#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
TARGET_BRANCH="stop-gap-v2"

function doCompile {
  make
  sleep 1
  rm _book/.travis.yml
  cp -a _book/. out/
}

# Build the site
doCompile

if [ "$TRAVIS_BRANCH" == "$TARGET_BRANCH" ]
then
  # deploy the site to s3
  aws s3 sync ./out/ s3://stop-gap --delete
  printf "%s\n" "master branch"
else
  # do nothing, and leave s3-deploy post script handle deployment.
  printf "%s\n" "another branch"
fi

# "$TRAVIS_PULL_REQUEST" != "false"