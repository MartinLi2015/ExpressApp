/**
 * Created by admin on 2016/3/16.
 */

var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello'+this.name);
    }
}
Base.prototype.showName = function () {
    console.log(this.name);
}
Base.prototype.sayHello = function(){
    console.log("HHHHH"+this.name);
}

function Sub(){
    this.name = 'sub';
}
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
objSub.sayHello();
console.log(objSub);

