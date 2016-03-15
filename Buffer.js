/**
 * Created by admin on 2016/3/15.
 */
buf = new Buffer(16);
len = buf.write("www.runoob.com");
console.log(buf.toString());
console.log(buf.length);
console.log(buf.toJSON(buf));
console.log("写入字节数 : "+  len);


buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde



var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
console.log(buffer1.compare(buffer2));

var buffer1 = new Buffer('ABCe');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}


var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2,0,0,3);// copy

buffer2 = buffer1.slice(0,2);// 裁剪
console.log("buffer2 content: " + buffer2.toString());


var b = new Buffer(6);
b.writeUIntBE(0x1234567890ab, 0, 6);
console.log(b.toString('utf-8'))