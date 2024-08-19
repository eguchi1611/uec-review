import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";

export class UecReviewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const natGatewayProvider = ec2.NatProvider.instanceV2({
      instanceType: new ec2.InstanceType("t3.nano"),
      defaultAllowedTraffic: ec2.NatTrafficDirection.OUTBOUND_ONLY,
    });

    const vpc = new ec2.Vpc(this, "MyVpc", {
      maxAzs: 1,
      natGatewayProvider: natGatewayProvider,
    });

    natGatewayProvider.securityGroup.addIngressRule(
      ec2.Peer.ipv4(vpc.vpcCidrBlock),
      ec2.Port.allTraffic()
    );

    const securityGroup = new ec2.SecurityGroup(this, "MySecurityGroup", {
      vpc: vpc,
    });
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22));

    const instance = new ec2.Instance(this, "MyInstance", {
      vpc: vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      instanceType: new ec2.InstanceType("t2.micro"),
      machineImage: ec2.MachineImage.genericLinux({
        "ap-northeast-1": "ami-0a0b7b240264a48d7",
      }),
      securityGroup: securityGroup,
      keyPair: ec2.KeyPair.fromKeyPairName(this, "MyKeyPair", "m1mac"),
    });

    const func = new lambda.DockerImageFunction(this, "MyFunction", {
      code: lambda.DockerImageCode.fromImageAsset("../server"),
      architecture: lambda.Architecture.X86_64,
      vpc: vpc,
      environment: {
        DATABASE_CLIENT: "mysql",
        DATABASE_HOST: instance.instancePrivateIp,
        DATABASE_PORT: "3306",
        DATABASE_SSL: "false",
        DATABASE_POOL_MIN: "0",

        DATABASE_NAME: process.env.STRAPI_DATABASE_NAME || "",
        DATABASE_USERNAME: process.env.STRAPI_DATABASE_USERNAME || "",
        DATABASE_PASSWORD: process.env.STRAPI_DATABASE_PASSWORD || "",
        APP_KEYS: process.env.STRAPI_APP_KEYS || "",
        API_TOKEN_SALT: process.env.STRAPI_API_TOKEN_SALT || "",
        ADMIN_JWT_SECRET: process.env.STRAPI_ADMIN_JWT_SECRET || "",
        TRANSFER_TOKEN_SALT: process.env.STRAPI_TRANSFER_TOKEN_SALT || "",
        JWT_SECRET: process.env.STRAPI_JWT_SECRET || "",

        FLAG_PROMOTE_EE: "false",
      },
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
    });
    const functionUrl = func.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(3306));

    new cloudfront.Distribution(this, "MyDistribution", {
      defaultBehavior: {
        origin: new origins.FunctionUrlOrigin(functionUrl),
        cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        originRequestPolicy:
          cloudfront.OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
      },
    });

    new cdk.CfnOutput(this, "FunctionUrl", {
      value: functionUrl.url,
    });
  }
}
