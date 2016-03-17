/**
 * Created by admin on 2016/3/17.
 */
var util = require('util');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));
console.log("isArray end");

console.log(util.isRegExp(/come regexp/));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));
console.log("isRegExp end");

console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));
console.log("isDate end");


console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isDate({ name: 'Error', message: 'an error occurred' }));
console.log("isError end");
