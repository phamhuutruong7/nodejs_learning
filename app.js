//Event: a signal that something has happened
const EventEmittter = require('events'); //load the event module
//EventEmitter is a class
const emitter = new EventEmittter(); //constance of this class

//Register a listener
emitter.on('messageLogged', (arg)=>{   //e or eventArg is fine
    console.log('Listener called', arg);
});
//in on-method has 2 arguments. the first is the name of the method, and the second is the callback, that print out the inside function
//This is a arrow function. Appear from ECMAScript6

//Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'});//id is 1
//Notice: emit = making a noise, produce = signaling

//Raise: logging(data: message)
