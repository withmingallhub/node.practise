// fs 是 file-system 的简写，就是文件系统的意思
// 再Node中如果想要进行文件操作，就必须引入fs这个核心模块
// 再fs这个核心模块中，就提供了所有文件操作相关的API
// 例如：fs.readFile 就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require("fs")


// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//  error

//     成功:
//          文件写入成功
//          error是null
//     失败
//          文件写入失败 
//          error就是错误对象

fs.writeFile('./文件操作夹/write1.txt','大家好！我叫严欣豪！',function(error){
    if(error === null){
        console.log("文件写入成功!");
        console.log()
    }
    else{
        console.log('文件写入失败!');
    }
})
// 2.读取文件
//  第一个参数就是要读取的文件路径
//  第二参数是一个回调函数
//   
//    成功
//       data数据
//       error null
//    失败
//       data null
//       error 错误对象



// var fs1 = require("fs")
fs.readFile('./文件操作夹/write1.txt',function(error,data){
{/* <Buffer e5 a4 a7 e5 ae b6 e5 a5 bd ef bc 81 e6 88 91 e5 8f ab e4 b8 a5 e6 ac a3 e8 b1 aa ef bc 81> */}
// 文件中存储的其实都是二进制数据 0 1
// 这里为什么看到的不是0和1呢？？原因是二进制转化为了十六进制
// 但是无论是十六进制还是二进制人类都不认识，所以可以通过toString将他转化为能够识别的字符
    if(data === null){
        console.log('文件打开失败!');
    }
    else
    console.log(data.toString());
})