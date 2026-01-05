# Project-Canario
---
This project was made for use on oslomet gitlab, the environment files there are no longer functional and things must be adapted to work with github
---

## Description

Websites for the canario project, the structure is quite simple!

In the `server` folder is the featureflag logic. Currently serving to localhost, each web folder is a respective prototype server. 
The `accessability` is the pipeline for testing accessability with [pa11y](https://2025.javazone.no/en/program/8fd8e3c9-b979-4b0b-9d97-0a2b0a44d7c4?__EXPO_ROUTER_key=undefined-Szt_ZSpLtcQ74MVmETSBH). This is added as a git submodule. 
## to start server: 

change credentials to the respective credentials for the services. '

run the startup script, or the commands:
```bash
cd server
```

```js
node --env-file=server/.env server-api.js
```

## deployment
## haproxy
proxy will work as our proxy to configure canario release
---


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









