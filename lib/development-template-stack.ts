import {
  Aws,
  Duration,
  Stack,
  StackProps,
  aws_lambda_nodejs as lambda_nodejs,
  aws_lambda as lambda,
} from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export class DevelopmentTemplateStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const llmLambea = new lambda_nodejs.NodejsFunction(this, "simple-llm", {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: "handler",
      entry: path.join(`${__dirname}/../`, "functions", "simple-llm/index.ts"),
      environment: {
        OPENAI_API_KEY: "openai-api-key",
      },
      memorySize: 256,
      timeout: Duration.seconds(120),
    });
  }
}
