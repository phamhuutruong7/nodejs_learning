console.log(module);
//Run this line with command prompt with the code: node app.js
//it will show its own module.
//Unlike browser applications, variables we define are not added to the
//"global" object.
//Every file in a Node application is a module. Node automatically warps the code in each file with an IIFE
//(Immediately-invoked Function Expression) to create scope.
//So, variables and functions defined in one file are only scoped to that file and not visible to toher files unless explicitly exported
