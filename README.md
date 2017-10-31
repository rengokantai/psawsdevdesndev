# psawsdevdesndev

## 8. Delivering Content with AWS
### 2 Understanding CloudFront Invalidations

Maximum TTL
- The maximum amount of time an Object will stay in CloudFront cache before a new copy is retrived from the origin.
- The higher, the better. Default is one year

Invalidations
- Replaces a designated object with a fresh copy from the origin.
- Can contain multiple files or directories
- 3000 object invalidation hard limit
- 1000 free invalidations /month
- can take minutes to process




## 10. Communicating with AWS
### 6 Limits with SNS and CloudWatch Alarms
5 actions per alarm.
alarm period cannot be longer than one day.

Can only use AWS supported metrics
