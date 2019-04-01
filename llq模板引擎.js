var fs = require('fs');
var template = require('art-template');
fs.readFile('浏览器中使用模版引擎.html',function(err,data){
    var ret = template.render(data.toString(),{
        msg:'hao',
        adress:'school',
        heigh:'330m',
        width:['100m','200m','300m']
    })
    console.log(ret);
})
