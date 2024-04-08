const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers)
})

server.listen(3001, 'localhost', () => {
    console.log('listenning for request on port 3000')
})