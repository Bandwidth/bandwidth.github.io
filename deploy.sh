#!/bin/bash
set -e # Exit with nonzero exit code if anything fails
SOURCE_BRANCH="gitbook"
TARGET_BRANCH="master"

function doCompile {
  make
  sleep 1
  rm _book/.travis.yml
  cp -a _book/. out/
}

if [ "$TRAVIS_BRANCH" == "$TARGET_BRANCH" ]; then
	exit 0
fi

# Build the site
doCompile

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    exit 0
fi


#If it is the target branch and NOT a pull request, then deploy 
if [ "$TRAVIS_BRANCH" == "$SOURCE_BRANCH" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ]
then
  # deploy the site to s3
  aws s3 sync ./out/ s3://old.dev.bandwidth.com
  # Clear the cloudfront cache
  aws cloudfront create-invalidation --distribution-id E25F7XS938O4B2 --paths "/*"
  printf "%s\n" "master branch"
else
  # do nothing, and leave s3-deploy post script handle deployment.
  printf "%s\n" "another branch"
fi
