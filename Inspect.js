/**
 * Created by admin on 2016/3/17.
 */
var util = require('util');
function Person(){
    this.name = 'byvoid';
    this.toString = function(){
        return this.name;
    }
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
console.log(util.inspect(obj,true,3,"#FFF"));



