const http = require('http')

async function stressThenResolve() {
  const start = new Date().getTime()
  const end = start + (40 * 1000) // Make it busy for 40 sec

  let clock = new Date().getTime()
  while (clock < end) {
    clock = new Date().getTime()
  }

  return await {}
}

const server = http.createServer(async (req, res) => {
  console.log('Request start')
  await stressThenResolve()

  console.log('End')
  res.end('End')
})

const port = Number(process.env.PORT || '3055')

server.listen(port, () => console.log(`HTTP server running on ${port}!`))
