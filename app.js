const os = require('os');
//This is how to call a function

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory: ' + totalMemory);

//Template string
//ES6/ ES2015: ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//This is about how JS can work with the OS, not only on the server side. 
//This example here is how it can read the data of the computer.
