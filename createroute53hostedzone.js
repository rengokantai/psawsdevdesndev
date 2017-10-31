const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'})

const route53 = new AWS.route53()
const hzName = 'rengokantai.com'

createHostedZone(hzName).then(data=>console.log(data))

function createHostedZone(hzName){
  const params = {
    Name:hzName,
    CallerReference:`${Date.now()}`
  }
  return new Promise((resolve,reject)=>{
    route53.createHostedZone(params,(err,data)=>{
      if(err) reject(err)
      else resolve(data)
    }
  })
}
