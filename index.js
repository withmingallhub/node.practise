// 模块依赖
var net = require('net')
// 创建服务器
var server = net.createServer(function (conn){
    console.log('\033[90m   new connection!\033[39m');
});
// 监听
server.listen(3000,function (){
    console.log('\033[96m    server listening on *:3000\33[39m');
});