/**
 * Created by admin on 2016/3/17.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req,res) {

    var pathName = url.parse(req.url).pathname;
    console.log("Request for "+pathName+'Received;');

    fs.readFile(__dirname+'\\'+pathName.substring(1), function (err,data) {
        if(err){
            console.log(err);
            res.writeHeader(404,{'Content-Type':'text/html'})
        }else{
            res.writeHeader(200,{'Content-Type':'text/html'})
            res.write(data.toString());
        }
        reponse.end();
    });

}).listen(8000);