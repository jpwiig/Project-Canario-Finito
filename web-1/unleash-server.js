import { resolve } from 'path'
import {Unleash} from 'unleash-client'
async function flag(){
const unleash = new Unleash({
url:process.env.GITLAB_URL  , 
appName: process.env.APP_NAME,
instanceId: process.env.INSTANCE_ID,
refreshInterval: 5
})





//unleash.isEnabled('newrel')
return new Promise((resolve) => {
unleash.on('ready',() => {
const enabled = unleash.isEnabled('newrel'); 
console.log("lol")
resolve(enabled)
})
})
}
export default flag; 