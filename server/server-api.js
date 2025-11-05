
import express from 'express'
import cors from 'cors';
import {flag, closeUnleash} from './unleash-server.js'


const app = express()
app.use(cors())
app.enable('trust proxy')
app.get('/api/flag', async(req, res) => {
    const en = await flag()
    res.json({enabled: en})
})
process.on('SIGTERM', () => {
  closeUnleash();
  process.exit(0);
})
app.listen(5000, () => {
    console.log('The feature flag API is ready' )
})