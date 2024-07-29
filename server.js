
const http = require('http');
const host = '127.1.1.2';
const port = 3001;


const rec = http.createServer((req, res) => {
  res.statusCode = 202; 

  res.end('Hello Venkateshwaran Nataraj!\n'); 
});


rec.listen(port, host, () => console.log(`server link http://${host}:${port}/`)
);
