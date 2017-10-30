const AWS = require('aws-sdk')

AWS.config.update({region:'us-east-1'})


function publish (msg) {
  const params = {
    TopicArn: TOPIC_ARN,
    Message: msg
  }
  
  return new Promise((resolve,reject)=>{
    sns.publish(params.(err,data)=>{
      if(err) reject(err)
      else resolve(data)
    })
  }
}

module.exports = { publish }
