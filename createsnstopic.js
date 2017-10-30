const AWS = require('aws-sdk')

AWS.config.update({region:'us-east-1'})

const sns = new AWS.SNS()
const topicName = 'ke'

createTopic(topicName).then(data=>console.log(data))

function createTopic(topicName){
  const param = {
    Name: topicName
  }
  
  return new Promise((resolve,reject)=>{
    sns.createTopic(params,(err,data)=>{
      if(err) reject(err)
      else resolve(data)
    }
  })
}
