const AWS = require('aws-sdk')

AWS.config.update({region:'us-east-1'})


const cw = new AWS.CloudWatch()
const alarmName = 'ke'
const topicArn = ''
const tg = 'targetgroup/name/123'
const lb = 'app/elb/123'

createCloudWatchAlarm(alarmName,topicArn,tg,lb).then(data=>console.log(data))
function createCloudWatchAlarm (alarmName,topicArn,tg,lb){
  const params = {
  AlarmName:alarmName,
  CompareospnOperator: 'LessThanThresHold',
  EvaluationPeriod:1
  MetricName:'HealthyHostCount';
  NameSpace: 'AWS/ApplicationELB',
  Period:60,
  Threshold:1,
  AlarmActions:[
    topicArn
  ],
  Dimensions:[
  {
    Name: 'TargetGroup',
    Value: tg
    },{
    Name: 'LoadBalancer',
    Value: lb
    }
  ],
  Statistics: 'Average',
  TreatMissingData:'breaching'
  }
  return new Promise((resolve,reject)=>{
    cw.putMetricAlarm(params,(err,data)=>{
      if (err) reject(err)
      else resolve(data)
    })
  }



}
