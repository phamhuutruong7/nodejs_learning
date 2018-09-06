const log = require('./logger');


//console.log(logger);
log('message');  //This will print the 'message' in log('message') out.
//It can print that out because of the function we write in logger.js

//We shouldnt declade a variable named logger and use it like that.
//Cause if we use it like that, we may declare a new value for it.
//So for the best, we will not declade an object named logger, but we declare
//an CONSTANT object name logger