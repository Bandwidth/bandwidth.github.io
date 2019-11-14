import * as AWS from 'aws-sdk'

const main = async () => {
  const cf = new AWS.CloudFormation({
    region: 'us-east-1'
  });
  let resources = await cf.listStackResources({
    StackName: 'LambdaStack'
  }).promise();

  let cfLambda = getLambdaFromResources(resources);
  
  if (cfLambda && cfLambda.PhysicalResourceId) {
    // we need to update the lambda to a new version number.
    let newVersion = await publishNewLambdaVersion(cfLambda.PhysicalResourceId.toString());
    console.log(newVersion)

    // now that we have the physical id of the latest version of the lambda, we'll need to update the cloudfront distribution

    const cloudfront = new AWS.CloudFront()

    let dist = await cloudfront.getDistributionConfig({
      Id: 'E2DJMH5LKMGQA6'
    }).promise();

    if (dist.DistributionConfig && newVersion.FunctionArn) {
      let config = dist.DistributionConfig;
      if (config.DefaultCacheBehavior.LambdaFunctionAssociations && config.DefaultCacheBehavior.LambdaFunctionAssociations.Items) {
        config.DefaultCacheBehavior.LambdaFunctionAssociations.Items[0].LambdaFunctionARN = newVersion.FunctionArn.toString();
      }

      console.log('Performing Cloudfront Distribution Update');

      let update = await cloudfront.updateDistribution({
        DistributionConfig: config,
        Id: 'E2DJMH5LKMGQA6',
        IfMatch: dist.ETag
      }).promise()

      console.log(update);
    } else {
      process.exit(-1)
    }
  } else {
    process.exit(-1)
  }

  
}

const getLambdaFromResources = (resources: AWS.CloudFormation.ListStackResourcesOutput) => {
  if (resources.StackResourceSummaries) {
    return resources.StackResourceSummaries.find((resource) => {
      if (resource.ResourceType === 'AWS::Lambda::Function') {
        return true;
      }
      return false;
    })
  }
  return undefined;
}

const publishNewLambdaVersion = async (arn: string) => {
  let lambda = new AWS.Lambda({
    region: 'us-east-1'
  });
  let publish = await lambda.publishVersion({
    FunctionName: arn
  }).promise();
  return publish;
}


main();
