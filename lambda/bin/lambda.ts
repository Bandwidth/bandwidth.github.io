#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
new LambdaStack(app, 'LambdaStack', {
    env: {
        region: 'us-east-1',
        account: '564685280272'
    }
});