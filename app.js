//Event: a signal that something has happened
const EventEmittter = require('events'); //load the event module
//EventEmitter is a class
//const emitter = new EventEmittter(); //constance of this class
//copy 2 line of codes here to logger.js

//Register a listener
//emitter.on('messageLogged', (arg)=>{   //e or eventArg is fine
  //  console.log('Listener called', arg);
//});
//in on-method has 2 arguments. the first is the name of the method, and the second is the callback, that print out the inside function
//This is a arrow function. Appear from ECMAScript6
//This code will move down under the Logger. The reason is, this is a method of Logger class. and after we call the class, we call the function inside of it

//Raise an event
//emitter.emit('messageLogged', {id: 1, url: 'http://'});//id is 1
//Notice: emit = making a noise, produce = signaling

//Raise: logging(data: message)

const Logger = require('./logger');
const logger = new Logger();
logger.on('messsageLogged', (arg)=>{
    console.log('Listener called', arg);
});
logger.log('message');
//That eventListener was not called in this example. 
//Reason: we worked with 2 different eventEmitter
//In app.js, we have a emitter object, and logger.js we have another Emitter object. 
//A class is like a blueprint, and an object is an actual instance. 
