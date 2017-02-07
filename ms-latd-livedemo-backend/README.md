# ms-latd-livedemo-backend

This is the backend of the Logic App Twitter Demo, it does the following:
* logic app twitter trigger - when new tweet is posted (certain hashtags) 
* logic app detect sentiment - text recognition api, 1 positive 0 negative
* logic app post to backend
* backend (this stuff) gets the message and publish it to topic on redis

When starting this docker instance you need to provide the following parameters
* process.env.REDIS_URL
* process.env.REDIS_PASSWORD
* process.env.REDIS_TOPIC

You can start this instance with the following command:
* docker run -d -p 3000:3000 -e REDIS_URL="[YOU REDIS URL]" -e REDIS_PASSWORD="[YOUR REDIS KEY]" -e REDIS_TOPIC="[YOUR REDIS TOPICNAME]" REPO/NAME_OF_YOUR_DOCKERIMAGE

It will start with the following command: swagger project start
