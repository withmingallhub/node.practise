var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    // 在服务端默认发送的数据，是utf-8编码内容
    // 浏览器在不知道服务器内容响应的编码的情况下，会按照当前操作系统的默认编码去解析
    // 中文操作系统默认的是gbk
    // 解决的方法是 在http协议中，使用content-type 来告知对方使用的编码的类型
    // res.setHeader('Content-Type','text/plain;charset=utf-8')
    // res.end('hello 够好')

    if(req.url === '/eng'){
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('hello 狗豪')
    }
    else if(req.url === '/china'){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<h1>严信号</h1>')
    }
})
server.listen(3000,function(){
    console.log('running!')
})