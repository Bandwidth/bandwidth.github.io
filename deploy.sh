#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
TARGET_BRANCH="master"

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
  aws sts get-caller-identity
  printf "%s\n" "master branch"
else
  aws sts get-caller-identity
  printf "%s\n" "another branch"
fi

# "$TRAVIS_PULL_REQUEST" != "false"