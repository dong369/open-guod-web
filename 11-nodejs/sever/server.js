// 如何启动：> node server.js
const http = require('http')

http.createServer(function (request, response) {
    console.log('request come', request.url);
    // 处理跨域
    // response.writeHead(200, {
    //     '': '*'
    // })
    response.end('node js server');
}).listen(8888)

console.log('server listening 8888');