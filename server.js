const http = require('http');

// const server = http.createServer((request, response) => {
//   if (request.url.split('/')[1] === '') {
//     if (request.method === 'GET') {
//       response.end("Hello Galvanize!");
//     }
//   }
//   response.statusCode = 404;
//   response.end();
// });

const server = http.createServer((request, response) => {
  if (request.url.split('/')[1] === '') {
    response.end("Hello Galvanize!");
  }
  response.statusCode = 404;
  response.end();
});


server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);
});


