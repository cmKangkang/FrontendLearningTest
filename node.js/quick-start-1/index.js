const http = require('http');
const chalk = require('chalk');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello, world');
});

server.listen(port, hostname, () => {
  console.log(`server运行在 http://${{hostname}}:${port}/`);
  console.log(chalk.green('你好'))
})