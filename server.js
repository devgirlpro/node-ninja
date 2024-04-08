const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url, req.headers);

    //set header content type
    res.setHeader('Content-type', 'text/html');

    res.write('<h2>Helo from server</h2>');
    res.write('<h3>welcome to my club</h3>');
    res.end();
})

server.listen(3001, 'localhost', () => {
    console.log('listenning for request on port 3000')
})