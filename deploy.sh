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
if [ "$TRAVIS_BRANCH" == "$SOURCE_BRANCH" ] && [ "$TRAVIS_PULL_REQUEST" == "true" ]
then
  # deploy the site to s3
  aws s3 sync ./out/ s3://old.dev.bandwidth.com --delete
  # Clear the cloudfront cache
  aws cloudfront create-invalidation --distribution-id E25F7XS938O4B2 --paths "/*"
  printf "%s\n" "master branch"

  # TO BE REMOVED - Also update the github pages link for now
  # Save some useful information
  REPO=`git config remote.origin.url`
  SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
  SHA=`git rev-parse --verify HEAD`

  rm -rf out/**/*

  # Clone the existing gh-pages for this repo into out/
  # Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
  git clone $REPO out
  cd out
  git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
  rm -rf *
  cd ..
  cp deploy_key.enc ./out

  # Clean out existing contents
  rm -rf out/**/*

  # Run our compile script
  doCompile
  #cp deploy_key.enc ./out
  ls -la

  # Now let's go have some fun with the cloned repo
  cd out
  git config user.name "Travis CI"
  git config user.email "$COMMIT_AUTHOR_EMAIL"

  # If there are no changes to the compiled out (e.g. this is a README update) then just bail.
  # if [ -z `git diff --exit-code` ]; then
  #     echo "No changes to the output on this push; exiting."
  #     exit 0
  # fi

  # Commit the "changes", i.e. the new version.
  # The delta will show diffs between new and old versions.
  git add --all
  git commit -m "Deploy to GitHub Pages: ${SHA}"

  # Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
  ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
  ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
  ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
  ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
  openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in deploy_key.enc -out deploy_key -d
  chmod 600 deploy_key
  eval `ssh-agent -s`
  ssh-add deploy_key

  # Now that we're all set up, we can push.
  git push $SSH_REPO $TARGET_BRANCH

  # END TO BE DELETED
else
  # do nothing, and leave s3-deploy post script handle deployment.
  printf "%s\n" "another branch"
fi
