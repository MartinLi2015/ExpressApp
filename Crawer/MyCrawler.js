/**
 * Created by admin on 2016/3/18.
 */
var http = require('http');

var url = "http://www.alloyteam.com/";
var data= "";

var req = http.request(url, function (res) {

    res.setEncoding("utf-8");
    res.on('data', function (chunk) {
        data+=chunk;
    });
    res.on('end', function () {
        console.log(data);
    });

});
req.end();