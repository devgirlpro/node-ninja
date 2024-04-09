const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.method, req.url, req.headers);

    //set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';

    switch(req.url) {
        case '/':
          path += 'index.html';
        //   res.statusCode = 200;
          break;
        case '/about':
          path += 'about.html';
        //   res.statusCode = 200;
          break;
        // case '/about-us':
        //   res.statusCode = 301;
        //   res.setHeader('Location', '/about');
        //   res.end();
        //   break;
        default:
          path += '404.html';
          res.statusCode = 404;
      }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });

   
})

server.listen(3001, 'localhost', () => {
    console.log('listenning for request on port 3000')
})