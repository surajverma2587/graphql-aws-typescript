import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";

import * as path from "path";

export class GraphqlAwsTypescriptStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const graphqlAwsTypescriptLambda = new lambda.Function(
      this,
      "GraphqlAwsTypescriptLambda",
      {
        runtime: lambda.Runtime.NODEJS_12_X,
        code: lambda.Code.fromAsset(path.join(__dirname, "../..", "dist")),
        handler: "lambda.handler",
      }
    );

    new apiGateway.LambdaRestApi(this, "Endpoint", {
      handler: graphqlAwsTypescriptLambda,
    });
  }
}
