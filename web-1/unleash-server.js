import {Unleash} from 'unleash-client'
const unleash = new Unleash({
url:process.env.GITLAB_URL  , 
appName: process.env.APP_NAME,
instanceId: process.env.INSTANCE_ID

})

unleash.on('ready', console.log.bind(console, 'ready'))

setInterval(() =>{
    if(unleash.isEnabled('newrel')){
        console.log("eg er en banan")
    } else{
        console.log("ikkje ein banan")
    }
})