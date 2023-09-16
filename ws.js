// npm init
// npm install ws
// npm i nodemon
// nodemon ./ws.js
const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('I am connected to server..');
});


const wss = new websocket.WebSocketServer({server});
wss.on('headeers', (headers, req) => {
    console.log(headers);
})


wss.on('connection', (ws, req) => {
    // console.log(req);
    ws.send("connected to ws server!");
    ws.on('message', (data) => {
        console.log(data.toString());
    })

})

server.listen(5000);