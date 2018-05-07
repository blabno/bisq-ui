export default {
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
    "InstanceType": {
      "Description": "WebServer EC2 instance type",
      "Type": "String",
      "Default": "t2.small",
      "AllowedValues": [
        "t2.small"
      ],
      "ConstraintDescription": "must be a valid EC2 instance type."
    },
    "AMIID": {
      "Description": "ID of an existing Amazon Machine Image.",
      "Type": "String",
      "Default": "ami-1853ac65"
    }
  },
  "Mappings": {
    "AWSInstanceType2Arch": {
      "t2.small": {
        "Arch": "HVM64"
      }
    },
    "AWSInstanceType2NATArch": {
      "t2.small": {
        "Arch": "NATHVM64"
      }
    },
    "AWSRegionArch2AMI": {
      "us-east-1": {
        "PV64": "ami-2a69aa47",
        "HVM64": "ami-97785bed",
        "HVMG2": "ami-0a6e3770"
      }
    }
  },
  "Resources": {
    "EC2Instance": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "UserData": {
          "Fn::Base64": {
            "Fn::Sub": "#!/bin/bash -xe\nsudo yum update -y\nsudo yum install -y docker\nsudo service docker start\nsudo docker run -p 80:8080 --restart always bisq/api\n"
          }
        },
        "InstanceType": {
          "Ref": "InstanceType"
        },
        "SecurityGroups": [
          {
            "Ref": "InstanceSecurityGroup"
          }
        ],
        "ImageId": {
          "Ref": "AMIID"
        }
      }
    },
    "InstanceSecurityGroup": {
      "Type": "AWS::EC2::SecurityGroup",
      "Properties": {
        "GroupDescription": "Enable HTTP access",
        "SecurityGroupIngress": [
          {
            "IpProtocol": "tcp",
            "FromPort": "80",
            "ToPort": "80",
            "CidrIp": "0.0.0.0/0"
          }
        ]
      }
    },
    "IPAddress": {
      "Type": "AWS::EC2::EIP"
    },
    "IPAssoc": {
      "Type": "AWS::EC2::EIPAssociation",
      "Properties": {
        "InstanceId": {
          "Ref": "EC2Instance"
        },
        "EIP": {
          "Ref": "IPAddress"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "InstanceId of the newly created EC2 instance",
      "Value": {
        "Ref": "EC2Instance"
      }
    },
    "InstanceIPAddress": {
      "Description": "IP address of the newly created EC2 instance",
      "Value": {
        "Ref": "IPAddress"
      }
    }
  }
};
