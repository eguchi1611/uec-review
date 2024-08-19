import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import * as ec2 from "aws-cdk-lib/aws-ec2";

export class UecReviewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "MyVpc", {
      subnetConfiguration: [
        {
          subnetType: ec2.SubnetType.PUBLIC,
          name: "public",
          cidrMask: 24,
        },
      ],
      maxAzs: 1,
    });

    const securityGroup = new ec2.SecurityGroup(this, "MySecurityGroup", {
      vpc: vpc,
    });

    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22));
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80));

    const instance = new ec2.Instance(this, "MyInstance", {
      vpc: vpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T2,
        ec2.InstanceSize.MICRO
      ),
      machineImage: ec2.MachineImage.genericLinux({
        "ap-northeast-1": "ami-0a0b7b240264a48d7",
      }),
      securityGroup: securityGroup,
      keyPair: ec2.KeyPair.fromKeyPairName(this, "MyKeyPair", "m1mac"),
    });

    new cdk.CfnOutput(this, "publicIp", {
      value: instance.instancePublicIp,
    });
  }
}
