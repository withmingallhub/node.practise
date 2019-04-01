var http = require('http')
var server = http.createServer();



server.on('request',function(request,response){
    console.log('收到客户端的请求！请求的路径是' + request.url)
    response.write('hello')
    response.write('node.js')
    response.end()
})
server.listen(4000,function(){
    console.log('服务器请求成功，通过  http://127.0.0.1:3000/ 进行访问！');
})