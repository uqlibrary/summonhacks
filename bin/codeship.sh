#!/bin/bash

set -xe
# Frontend tests
gem install campy
gem install sass
gem install compass
rbenv rehash

# Use env vars to set AWS config
set +x
awsconfig="aws.json"
sed -i -e "s#<AWSAccessKeyId>#${AWSAccessKeyId}#g" ${awsconfig}
sed -i -e "s#<AWSSecretKey>#${AWSSecretKey}#g" ${awsconfig}
sed -i -e "s#<S3Bucket>#${S3Bucket}#g" ${awsconfig}
sed -i -e "s#<S3Folder>#${S3Folder}#g" ${awsconfig}
sed -i -e "s#<CFDistribution>#${CFDistribution}#g" ${awsconfig}
sed -i -e "s#<AWSRegion>#${AWSRegion}#g" ${awsconfig}

grunt deploy
set -x

rm -f ${awsconfig}
