
    console.log(__filename);
    console.log(__dirname);
    var url ='http://mylogger.io/log';

function log(message){
    //Send an HTTP request
    console.log(message);
}

module.exports = log;

//In runtime, our code will be wrapped into a function like this
//(function (exports, require, module, __filename, __dirname) { 


//This look like a function in javascript
//Node has a few built in modules that enable us to work with the file system, path objectsm network, operating system, etc
//Nodejs does not execute our code directly
//Required function: appears to be global function, but actually not a global function
//Module in the function is the module that we use in module.exports
//You can add a function to module of export's object, you can write
//module.exports.log = log;
//exports.log = log;
//but not write exports = log; because that export is referenced to module.exports

