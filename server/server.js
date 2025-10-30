
//import path from "path"
import express from 'express';

import {flag,  closeUnleash } from './unleash-server.js';

let flagStatus = false
const app = express();
const port = 3000;
async function staticMiddleware(flagStatus){
    app._router = null
if (flagStatus){
    console.log("on")
 app.use(express.static('flag2'))
} else {
    console.log("off")
app.use(express.static('public'));

}
}

async function startserver(){
   try{
    const newflagsFirst= await flag();

    staticMiddleware(newflagsFirst)

try{
    setInterval(async () => {
    const newflags= await flag();

    
    if(newflags !== newflagsFirst){
        console.log("value flag changed")
        staticMiddleware(newflags)
    }
}, 10000
)

}catch(error){
console.error("error flags", error)
}

 app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
} catch(error){
    console.error("error on init", error)
}}

//shutting down unleash
process.on('SIGTERM', () => {
    closeUnleash()
    process.exit(0)
})

startserver()
