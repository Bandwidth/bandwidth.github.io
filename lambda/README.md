# Lambda@Edge Redirect Engine for dev.bandwidth.com

This system, deployed on the cloudfront edge nodes of (formally `new.-`) dev.bandwidth.com, handles redirect logic for existing URLs. It is _not_ setup with CI/CD. A manual `yarn build` `cdk deploy` is required to push to the DX AWS Account.

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

