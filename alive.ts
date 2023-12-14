import https from 'http'
const alive = https.createServer(function (req, res) {
  res.write("I'm alive"); res.end();
}).listen(8080);

export default alive
