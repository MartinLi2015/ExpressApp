/**
 * Created by admin on 2016/3/15.
 */

var events = require('events');
var eventEmitters = new events.EventEmitter();

var connectHandler = function connect(){
    console.log("connect successs");
    eventEmitters.emit('data_receive');
}
eventEmitters.on('connection',connectHandler);
eventEmitters.on('data_receive',function(){
    console.log("data receive success");
});

eventEmitters.emit('connection');
console.log('end');



var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
    console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
    console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");

var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');