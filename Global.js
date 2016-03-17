/**
 * Created by admin on 2016/3/16.
 */

console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log("Hello world");
}
var t = setTimeout(printHello,2000);

clearTimeout(t);

var it = setInterval(printHello,2000);




function startPrintHello(){
    clearInterval(it);
}
setTimeout(startPrintHello,6000);


process.on('exit',function(code){

    setTimeout(function () {
        console.log("not execute");
    },0)

    console.log("exit");
})

console.log('end');


process.stdout.write("Hello World111");

process.argv.forEach(function (val, index,array) {
    console.log(index+" :  "+val);
})

console.log(process.execPath);
console.log(process.env);
console.log(process.version);
console.log(process.config);
console.log(process.pid);
console.log(process.title);
console.log(process.arch);
console.log(process.platform);
console.log(process.mainModule);

console.log(process.cwd());

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());