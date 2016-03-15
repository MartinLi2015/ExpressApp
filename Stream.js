///**
// * Created by admin on 2016/3/15.
// */
//
//var fs = require("fs");
//var data = '';
//
//var readStream = fs.createReadStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt');
//readStream.setEncoding('utf-8');
//
//readStream.on('data',function(data1){
//
//    data+=data1;
//})
//readStream.on('end',function(){
//    console.log(data);
//})
//readStream.on('error', function(err){
//    console.log(err.stack);
//});
//console.log('end');
//
//var fs1 = require('fs');
//var data1 = 'nidfadjfoajdfoajdfioajdfad';
//var writeStream = fs1.createWriteStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt');
//writeStream.write(data1,'utf-8');
//writeStream.end();
//writeStream.on('finish', function () {
//    console.log('finish');
//})
//writeStream.on('error', function (err) {
//    console.log(err.stack);
//})
//console.log('end2');

//var fs1 = require('fs');
//var data = '';
//var readStream = fs1.createReadStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt');
//var writeStream = fs1.createWriteStream('C:\\Users\\admin\\Desktop\\Node_js\\output.txt');
//readStream.pipe(writeStream);

//readStream = fs1.createReadStream('C:\\Users\\admin\\Desktop\\Node_js\\output.txt');
//readStream.on('data', function (data1) {
//    data +=data1;
//})
//readStream.on('end', function () {
//    console.log(data);
//})
//readStream.on('error', function (error) {
//    console.log(error.stack);
//})

//console.log('end3');


//var fs = require("fs");
//var zlib = require('zlib');
//
//// 压缩 input.txt 文件为 input.txt.gz
//var readStream = fs.createReadStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt');
//readStream .pipe(zlib.createGzip());
//readStream .pipe(fs.createWriteStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt.gz'));
//
//readStream.on('err', function (err) {
//    console.log(err.stack);
//})
//readStream.on('end', function () {
//    console.log('finish');
//})
//
//console.log("文件压缩完成。");


//var fs = require("fs");
//var zlib = require('zlib');
//
//// 解压 input.txt.gz 文件为 input.txt
//fs.createReadStream('C:\\Users\\admin\\Desktop\\Node_js\\input.txt.gz')
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream('C:\\Users\\admin\\Desktop\\Node_js\\input1.txt'));
//
//console.log("文件解压完成。");
