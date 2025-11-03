# Project-Canario


## Description

Websites for the canario project, the structure is quite simple!

In `server` folder is the featureflag logic. Currently serving to localhost, each web folder is a respective prototype server. 

## to start server: 

change credentials to the respective credentials for the services. '

run the startup script, or the command:

```node
node --env-file=server/.env 
```

dockerfile TBD


Structure of the project: 

```bash
project-canario
├── accessability
│   ├── accessabilitiy-testing.sh
│   ├── dockerfile
│   ├── pa11y-config
│   │   └── pa11y.json
│   ├── package.json
│   ├── package-lock.json
│   ├── report.csv
│   ├── report.html
│   ├── test.html
│   └── test-script.sh
├── deploy
│   └── docker-compose.yml
├── haproxy
│   ├── dockerfile
│   └── haproxy-config.cfg
├── README.md
├── server
│   ├── dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── run-locally
│   ├── server-api.js
│   ├── server.js
│   ├── stop-locally
│   └── unleash-server.js
├── server-start
├── swarm.yml
├── web-1
│   ├── img
│   │   └── Gemini_Generated_Image_x4imp8x4imp8x4im.png
│   ├── index.css
│   ├── index.html
│   └── index.js
└── web-2
    ├── index.css
    ├── index.html
    └── index.js
```









