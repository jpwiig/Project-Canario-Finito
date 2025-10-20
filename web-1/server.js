
//import path from "path"

import express from 'express';
import flag from './unleash-server.js';


const app = express();
const port = 3000;
const flags=await flag()
console.log(flags)

if (flags){
    console.log("reee")
 app.use(express.static('flag2'))
} else {
app.use(express.static('public'));
}
/*
app.get("/unleash-server.js", (req, res) => {
  res.type("application/javascript");
  res.sendFile(__dirname+"/unleash-server.js");
});
*/
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

