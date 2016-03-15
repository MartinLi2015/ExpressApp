
/**
 * Created by admin on 2016/3/15.
 */

function hello(){
    var name;
    this.setName = function (thyName) {
        name = thyName;
    }
    this.sayHello = function () {
        console.log('hello '+name);
    }
}
module.exports = hello;