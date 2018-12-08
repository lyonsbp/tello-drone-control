const dgram = require('dgram')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const throttle = require('lodash/throttle')

const port = 8889
const host = '192.168.10.1'
const drone = dgram.createSocket('udp4')
drone.bind(port)

const droneResponder = dgram.createSocket('udp4')
droneResponder.bind(8890)

function parseState (state) {
  return state
    .split(';')
    .map(x => x.split(':'))
    .reduce((data, [key, value]) => {
      data[key] = value
      return data
    }, {})
}

io.on('connection', (socket) => {
  socket.on('command', command => {
    console.log('command received')
    console.log(command)
    drone.send(command, 0, command.length, port, host)
  })
  console.log('connected')
})

http.listen(3000, () => {
  console.log('Listening on localhost:3000')
})

droneResponder.on(
  'message',
  throttle(state => {
    const formattedState = parseState(state.toString())
    console.log(formattedState)
    io.sockets.emit('droneResponse', formattedState)
  }, 500)
)

drone.send('command', 0, 'command'.length, port, host)
