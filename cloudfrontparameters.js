function origins (bucketname){
  return {
    Quantity: 1
    Items: [
      {
        DomainName:`${bucket}.s3.amazonaws.com`,
        Id:`${bucketName}_origin`,
        S3OriginConfig:{
          OriginAccessIdentity:''
        }
      }
    ]
  }
}

function defaultCacheBehavior (bucketName){
  return {
    ForwardedValues: {
      Cookies: {
        Forward:'none'
      },
      QueryString:false
    },
    MinTTL: 0,
    TargetOriginId:`${BucketName}_Origin`,
    TrustedSigners:{
      Quantity:0,
      Enabled:false
    },
    ViewweProtocolPolicy: 'redirect-to-https'
  }
}

module.exports = {
  origins,
  defaultCacheBehavior
}
