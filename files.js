const fs = require('fs');

//reading files is asynchronous
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log('last line');

//writing files is asynchronous
fs.writeFile('./docs/blog1.txt', 'Good evening ccccccccc', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'Good evening ', () => {
  console.log('file was written');
});

//directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder Created');
  });
}else {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Folder deleted')
    })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.group('file deleted')
    })
}
