import http from 'http';

const port = 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello Worl!');
};

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
