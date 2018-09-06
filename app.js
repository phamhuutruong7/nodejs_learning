const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));   //If run on browser, you need to go to localhost:3000/api/courses, it will print an array
        res.end();

    }
});

// server.on('connection', (socket)=>{
//     console.log('New connection...');
// });

server.listen(3000); //listen to port 3000

console.log('Listening on port 3000...');