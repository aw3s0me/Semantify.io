# Semantify.io
A Web-based tool to semantify / ontologize the knowledge of a standards with semantic technologies

#Docker
1. Install docker from: https://www.docker.com/
2. Run in console: `$ docker run -itd --name semantify -p 3000:3000 -p 3001:3001 -p 3030:3030 akorovin/semantify.io`. 
it will download docker image and build it on your host. And also it will build github project and run it on node.js.
3. website should be accessible from `localhost:3000`

#Installation
1. Install node.js

    Visit website https://nodejs.org/en/

2. Run in main folder

    npm install

#Running web-site
1. To run web site use

    npm run dev

2. Run web site in production use
    
    npm run build
    
    npm run start

3. Seeing website

    go to http://localhost:3000/

#Running tests
1. Running api tests

    npm run test-api

2. Running api actions tests

    npm run test-actions

3. Running karma tests

    npm run test

#Debugging
I hope this branch can be helpful. I have found that sourceMaps option is not needed.

nodemon should be installed npm install -g nodemon

    Run node-inspector
    npm run dev-debug
    Open browser to node-inspector

You can set break point at original.js.source file in original (pre-transpiled) ES6 source.

Taken from:

https://github.com/erikras/react-redux-universal-hot-example/issues/830
