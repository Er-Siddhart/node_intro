// Intro to Middlewares

// body parser
// body parser is used to parse the data in the requests
// .If it is not present , the system will return undefined
// as it wont be able to read it.

// 

const http=require('http');

const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin.js')
const shopRoutes=require('./routes/shop.js')

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3030)

























// Module 1

// Express

// we are using express js because it is a framework of nodejs which 
// consist of predefined tasks in smaller code snippets.It helps us 
// in writing code faster and in a smooth manner.

// Middlewares
// It is a request handler which intercepts or manipulates the requests
// and responses before they reach route handlers.

// Next is used to send the request from one middleware to another
// middleware.

// res.send
// In Node.js, particularly when using the Express framework, 
// res.send is a method of the response object (res). It is used 
// to send a response back to the client. This method sets the 
// appropriate content-type header based on the type of data being 
// sent and completes the request-response cycle, meaning it 
// finalizes the response and sends it to the client.

// When you send a response using 
// res.send('<h1> hello to node js </h1>') in Node.js with Express, 
// the Content-Type header will be set to text/html; charset=utf-8 
// by default. This is because the response is a string that contains
//  HTML content, and Express automatically sets the content type to
//   text/html for HTML strings.

// When you send a response using res.send({ key1: value }) 
// in Node.js with Express, the Content-Type header will be set to 
// application/json; charset=utf-8 by default. This is because the 
// response is a JavaScript object, and Express automatically sets 
// the content type to application/json for JSON objects.

// The app.listen(3000) function in an Express.js application starts 
// the server and listens for incoming connections on the specified 
// port (in this case, port 3000). Behind the scenes, several things 
// happen:

// Create an HTTP Server:
// The app.listen() method internally calls the http.createServer() 
// method, passing the Express application (which is a request 
//     handler function) as an argument. This creates an HTTP server 
//     instance.

// javascript
// Copy code
// const http = require('http');
// const server = http.createServer(app);
// Bind to a Port:
// The server.listen(3000) method is called to bind the server to 
// the specified port (3000 in this case). This means the server 
// will start listening for incoming connections on port 3000.

// javascript
// Copy code
// server.listen(3000);
// Handle Incoming Requests:
// The server listens for incoming HTTP requests and routes them 
// through the Express middleware and route handlers defined in the 
// application. When a request comes in, the server uses the 
// provided request handler (the Express app) to process the 
// request and send a response.

// Asynchronous Operation:
// The listen() method is asynchronous. It sets up the server 
// to start listening for connections and then returns immediately.
//  The actual listening operation happens in the background. 
//  You can provide a callback function to listen() which will 
//  be called once the server starts listening successfully.

// javascript
// Copy code
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
// To summarize, app.listen(3000) does the following:

// Creates an HTTP server instance using the Express app as the 
// request handler.
// Binds the server to the specified port (3000).
// Starts listening for incoming connections on that port.
// Optionally, executes a callback function once the server is up 
// and running.
// This sets up the infrastructure needed for the Express 
// application to handle incoming HTTP requests.


// const http = require('http');

// const express = require('express');

// const app=express();

// app.use('/',(req,res,next)=>{
//     console.log('This always runs');
//     next();
// });

// app.use('/home',(req,res,next)=>{
//     console.log('Home page!');
//     res.send(`<h1>home page</h1>`);
//     // next();
// });


// app.use('/',(req,res,next)=>{
//     console.log('In the middleware!');
//     res.send(`<h1>normal</h1>`)
//     // next();
// });



// // app.use((req,res,next)=>{
// //     console.log('In another middleware');
// // })

// const server =http.createServer(app);

// server.listen(3000);
// // app.listen(3000)













































// const http=require('http');

// const server=http.createServer((req,res)=>{
//     // console.log(req.url,req.method);
//     // console.log(res.)
//     const url=req.url;

//     if(url==='/home'){
//         console.log('Welcome home')
//     }
//     else if(url==='/about'){
//         console.log('Welcome to About Us page')
//     }
//     else if(url==='/node'){
//         console.log('Welcome to my Node Js project')
//     }

//     // if(url==='/'){
//     //     res.write('<html>')
//     //     res.write('<head>Title</head>');
//     //     res.write('<body><form action="/message" method="post"><input type="text" ><button type="submit">Send</button></form></body>');
//     //     res.write('</html>');
//     //     return res.end();
//     // }

//     res.setHeader("Content-Type",'text/html');
//     res.write('<html>');
//     res.write('<head><title>My title!</title></head>');
//     res.write('<body><h2>Welcome to my node.js project.</h2></body>');
//     res.write('</html>');
//     res.end();

// })


// server.listen(4000);



// The internet works when the client sends the request to the server in return of a response, the request is sent to the server by going through a set of rules which are covered under the http protocols.when the server receives the request , it looks for a relevant response if  exists and then sends it to the user.

// .The core modules in nodejs are those which are inbuilt and are useful in making nodejs more resourceful.



// http- it is used to create a server and send requests.

// https- it is used to launch an SSL server.

// fs- it is used to gain access into the file system  and read data, make changes,etc.

// os-it is used to gain access of the details of the operating system.

// path-The path module provides utilities for working with file and directory paths. It helps in resolving and manipulating paths in a platform-independent way. You can use it to construct absolute paths, normalize paths, and join path segments. This is essential for ensuring that your application works correctly across different operating systems.



// Relative path: This specifies the location of a file or directory relative to the current working directory. For example, if your current directory is /home/user, a relative path like ../documents would refer to the documents directory one level above.
// Absolute path: This specifies the exact location of a file or directory from the root of the file system. It starts with the root directory, such as / on Unix-like systems or C:\ on Windows. For example, /home/user/documents is an absolute path.


// createServer creates the server for us



// Anonymous functions are those which do not have any name.



// It receives a request and runs the server which works on event based archietecture.

