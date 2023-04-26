const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 },()=>{
    console.log('server started')
})
wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o',data.toString());
      // broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
      // ws.send(data.toString());
   })
})
wss.on('listening',()=>{
   console.log('listening on 8080')
})