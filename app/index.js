const http = require ('http')

const server = http.createServer((req, res) => {
  while (1) { }
})

const port = Number(process.env.PORT || '3055')

server.listen(port, () => console.log(`HTTP server running on ${port}!`))
