const path = require('path')
const app = require('express')()
const http = require('http').Server(app)

app.get('/', (req, res) => {
  res.send(path.resolve(__dirname, '/index.html'))
})

http.listen(3000, () => {
  console.log('Listening on localhost:3000')
})
