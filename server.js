// server.js
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
console.log(`Servidor iniciado...`)
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Mensaje recibido => ${message}`)
  })
  ws.send('Hola desde el servidor!!')
})