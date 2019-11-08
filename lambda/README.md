# Lambda@Edge Redirect Engine for dev.bandwidth.com

This system, deployed on the cloudfront edge nodes of dev.bandwidth.com, handles redirect logic for existing URLs. It is setup with CI/CD.

# Useful commands

 * `yarn build`             compile typescript to js
 * `yarn watch`             watch for changes and compile
 * `yarn test`              perform the jest unit tests
 * `cdk deploy`             deploy this stack to your default AWS account/region
 * `cdk diff`               compare deployed stack with current state
 * `cdk synth`              emits the synthesized CloudFormation template
 * `yarn deployLambdaEdge`  publishes a new version of the lambda function, and updates the cloudfront distribution

 # Adding new rules

 Rules are defined in src/p2prules.ts (point to point mapping of URL to URL), as well as src/index.ts (rule based rewrites)