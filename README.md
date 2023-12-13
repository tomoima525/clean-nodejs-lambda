# Clean TypeScript Lambda funciton

This is a repository to show how to create a clean TypeScript Lambda function.

## How to deploy

- Setup your AWS credentials.

```
// .env
CDK_ACCOUNT=123456789012
CDK_REGION=us-east-1
```

- Install dependencies.

```
yarn install
```

- Deploy.

```
yarn dlx cdk deploy --profile={your profile name}
```
