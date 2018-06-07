const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})

const server = http.createServer(function (req, res) {
  let target = 'http://localhost:8000'
  if (req.url) {
    target = req.url.split('?url=')[1]
  } else {
    console.log('bad request, referer: ' + document.referer)
    res.writeHead(400, { 'Content-Type': 'text/plain' })
    res.write('No target specified. \n' +
          'Specify target as https://ssl-proxy-url.example.com/?url=http://non-secure.example.com\n' +
          'Do not specify any additional url parameters.')
    res.end()
  }
  try {
    proxy.web(req, res, {
      target: target,
      secure: false
    })
  } catch (e) {
    console.log('unable to proxy request to target: ' + target)
  }
})

console.log('listening on port 5050')
server.listen(5050)
