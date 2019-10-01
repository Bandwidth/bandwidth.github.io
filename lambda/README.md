# Lambda@Edge Redirect Engine for dev.bandwidth.com

This system, deployed on the cloudfront edge nodes of (formally `new.-`) dev.bandwidth.com, handles redirect logic for existing URLs. It is _not_ setup with CI/CD. A manual `yarn build` `cdk deploy` is required to push to the DX AWS Account.

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

# Pushing a new version

1. Set your aws environment variables to connect to the DX AWS Account (Verify with `aws sts get-caller-identity`)
2. Run `cdk deploy` (CDK must be installed on system) to push a new version of the underlying lambda function
4. Clear the original lamba function from the cloudformation stack. This can be found by editing the behavior of the distribution: https://i.imgur.com/prmJtfh.png
3. Head to the console (sorry), go to the lamba function, and click here: https://i.imgur.com/PYBM1wg.png
5. Set the settings like this, and deploy the function https://i.imgur.com/YBVrERm.png
6. Give it 10-15 minutes, and potentially submit a `*` invalidation on the distribution to clear the edge cache