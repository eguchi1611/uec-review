import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as lambda from "aws-cdk-lib/aws-lambda";

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
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80));

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
      code: lambda.DockerImageCode.fromImageAsset("../app"),
      architecture: lambda.Architecture.X86_64,
      vpc: vpc,
      environment: {
        SERVER_IP: instance.instancePrivateIp,
      },
    });
    const functionUrl = func.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new cdk.CfnOutput(this, "FunctionUrl", {
      value: functionUrl.url,
    });
  }
}
