var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  var target = "http://localhost:8000";
  if (req.url) {
    target = req.url.split("?url=")[1]
  } else {
    console.log("bad request, referer: " + referer);
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.write("No target specified. \n"
          + "Specify target as https://ssl-proxy-url.example.com/?url=http://non-secure.example.com\n"
          + "Do not specify any additional url parameters.");
    res.end();
  }
  try {
    proxy.web(req, res, { 
      target: target,
      secure: false
    });
  } catch (e) {
    console.log("unable to proxy request to target: " + target);
  }
});

console.log("listening on port 5050")
server.listen(5050);