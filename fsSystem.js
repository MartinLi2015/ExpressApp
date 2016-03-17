/**
 * Created by admin on 2016/3/17.
 */

var fs = require('fs');
fs.open('C:\\Users\\admin\\Desktop\\Node_js\\input.txt','r+', function (err,fd) {
    if(err)  return console.error(err);
    console.log('fd: '+fd);
})



var fs = require("fs");

console.log("准备打开文件！");
fs.stat('C:\\Users\\admin\\Desktop\\Node_js\\input.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("读取文件信息成功！");

    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
});

console.log("准备写入文件");
fs.writeFile('C:\\Users\\admin\\Desktop\\Node_js\\input.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('C:\\Users\\admin\\Desktop\\Node_js\\input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});


