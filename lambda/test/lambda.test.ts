import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Lambda = require('../lib/lambda-stack');

test("Lambda created", () => {
  const app = new cdk.App();
  const stack = new Lambda.LambdaStack(app, 'MyTestStack');
  expectCDK(stack).to(haveResource("AWS::Lambda::Function"))
})