console.log("hello World");

var http = require("http");
http.createServer(function(request,response){

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World");
}).listen(8888);
console.log("Server End");
x=10
var y=10
//var sum = _
console.log(x+y)
//console.log(sum)

var x=0
do{

    x++;
    console.log("x: "+x)
}while(x<y)


