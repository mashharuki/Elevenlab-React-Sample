#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
const stack = new CdkStack(app, 'ElevenlabReactSampleStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

cdk.Tags.of(stack).add('Project', 'ElevenlabReactSample');
