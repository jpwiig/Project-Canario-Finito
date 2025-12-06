import {Unleash} from 'unleash-client'

const unleash = new Unleash({
url:process.env.GITLAB_URL  , 
appName: process.env.APP_NAME,
instanceId: process.env.INSTANCE_ID,
refreshInterval: 3000
})
let isReady = false

unleash.on('ready', () => {
    isReady=true
    console.log("unleash ready")
})

export async function flag(){

if(!isReady){
    await new Promise((resolve) => {
        unleash.once('ready', resolve)
    })
}

return unleash.isEnabled('newrel')
}



export async function selectflag(flagname){
console.log(flagname)
if(!isReady){
    await new Promise((resolve) => {
        unleash.once('ready', resolve)
    })
}

return unleash.isEnabled(flagname)
}

export function closeUnleash(){
    unleash.destroy()
}
