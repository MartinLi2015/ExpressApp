/**
 * Created by admin on 2016/3/15.
 */

var fs= require("fs")
var data = fs.readFileSync("C:\\Users\\admin\\Desktop\\Node_js\\input.txt")
console.log(data.toString())
console.log("end")
console.log("\\n\\n")


fs.readFile('C:\\Users\\admin\\Desktop\\Node_js\\input.txt', function (err,data) {
    if(err) return console.error(err)
    console.log(data.toString())
    console.log("end 2")
})
console.log("end 1")