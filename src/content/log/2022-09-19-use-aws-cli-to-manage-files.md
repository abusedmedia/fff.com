---
title: Use AWS CLI to manage files
layout: layouts/post.njk
date: 2022-09-19
---
Today I've learned how to download all the files in a S3 bucket with the AWS CLI.

There are a couple of interesting commands here:

```shell
aws s3 ls s3://yourbucket
```

to get the list of all files in that bucket, and

```shell
aws s3 cp s3://yourbucket . --recursive
```

to download all the files in that bucket to your local computer.

If you need to configure AWS first, type

```shell
aws configure
```

and add `access_key`, `secret_access_key`, and `region`.

Eay Peasy.