#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { GraphqlAwsTypescriptStack } from "../lib/graphql-aws-typescript-stack";

const app = new cdk.App();

new GraphqlAwsTypescriptStack(app, "GraphqlAwsTypescriptStack");
