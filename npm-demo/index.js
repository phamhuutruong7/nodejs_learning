//Try to use a package. here is using "underscore"
var _ = require('underscore');  //also use ./underscore if need
//3 conditions. just need 1 of them
//1.This module is the core module.
//2.File or folder in this project
//3.node_modules folder.

var result = _.contains([1,2,3],2);
console.log(result);
//Run in terminal. With: node index.js