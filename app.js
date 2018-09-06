//Event: a signal that something has happened
const EventEmittter = require('events'); //load the event module
//EventEmitter is a class
const emitter = new EventEmittter(); //constance of this class

//Register a listener
emitter.on('messageLogged', function()
{
    console.log('Listener called');
});
//in on-method has 2 arguments. the first is the name of the method, and the second is the callback, that print out the inside function

//Raise an event
emitter.emit('messageLogged');
//Notice: emit = making a noise, produce = signaling
