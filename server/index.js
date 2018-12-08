const dgram = require('dgram')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = 8889
const host = '192.168.10.1'
const drone = dgram.createSocket('udp4')
drone.bind(port)

const droneResponder = dgram.createSocket('udp4')
droneResponder.bind(8890)

io.on('connection', (socket) => {
  socket.on('command', command => {
    console.log('command received')
    console.log(command)
  })
  console.log('connected')
})

http.listen(3000, () => {
  console.log('Listening on localhost:3000')
})

droneResponder.on(
  'message',
  state => {
    // const formattedState = parseState(state.toString())
    // io.sockets.emit('dronestate', formattedState)
    console.log(state)
  }
)

drone.send('command', 0, 'command'.length, port, host)
