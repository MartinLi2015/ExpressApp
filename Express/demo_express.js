/**
 *
 * Created by admin on 2016/3/17.
 */

var express = require('express');
var url = require('url');

var fs = require('fs');
var multer = require('multer');
var cookieParser = require('cookie-parser')
var app = express();






var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
    res.sendFile(__dirname+"/"+"index.html");
})

app.get('/index.html', function (req,res) {
    res.sendFile(__dirname+"/"+"index.html");
})
app.get('/ReqPost.html', function (req,res) {
    var pathname = url.parse(req.url).pathname;
    console.log("whole pathname: "+__dirname+"/"+pathname.substring(1));
    res.sendFile(__dirname+"/"+pathname.substring(1));
})
app.get('/upload.html', function (req,res) {
    var pathname = url.parse(req.url).pathname;
    console.log("whole pathname: "+__dirname+"/"+pathname.substring(1));
    res.sendFile(__dirname+"/"+pathname.substring(1));
})

app.post('/file_upload', function (req,res) {
    console.log(req.files[0]);
    var dest_file = __dirname+"/"+req.files[0].originalname;
    fs.readFile(req.files[0].path, function (err,data) {
        fs.writeFile(dest_file,data, function (err) {
            if(err){
                console.log(err);
            }else {
                response = {
                    message:'upload file success',
                    filename:req.files[0].originalname
                }
                console.log(response);
                res.end(JSON.stringify(response));
            }
        })
    })


})


app.post('/progress_post', urlencodedParser,function (req,res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response)
    res.end(JSON.stringify(response));
})

app.get('/process_get', function (req,res) {

    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response)
    res.end(JSON.stringify(response));

})




app.post('/', function (req,res) {
    console.log('主页 POST 请求');
    res.send('Hello Post');
})

app.delete('/del_user',function(req,res){
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');

})
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


app.get('/listuser', function (req,res) {

    fs.readFile(__dirname+"/"+"user.json",'utf-8', function (err,data) {
        console.log(data);
        res.end(data);
    })
})

var user4 = {
    user4: {
        name: "user4",
        password: "password5",
        profession: "user4",
        id: 4
    }
}
app.get('/addUser',function(req,res){

    fs.readFile(__dirname+"/"+"user.json",'utf-8', function (err,data) {
        data = JSON.parse(data);
        data["user4"] = user4["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    })


})
//app.get('/:id', function (req, res) {
//    // 首先我们读取已存在的用户
//    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        var user = data["user" + req.params.id]
//        console.log( user );
//        res.end( JSON.stringify(user));
//    });
//})

var id = 2;

app.get('/deleteUser', function (req, res) {

    // First read existing users.
    fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        delete data["user" + 2];

        console.log( data );
        res.end( JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(("应用实例，访问地址为 http://%s:%s", host, port))
})