//This line will create an undifined.
//Reason ist, global Object cant access to message variable
//They only scope to this file
var message = '';
console.log(global.message);
