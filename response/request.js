const http=require('http');

const server=http.createServer((req,res)=>{
    
    const url=req.url;

    if(url==='/abc'){
        res.write('<html>');
        res.write('<head><title>My title!</title></head>');
        res.write('<body><h2>Welcome to home.</h2></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url==='/about'){

        res.write('<html>');
        res.write('<head><title>My title!</title></head>');
        res.write('<body><h2>Welcome to about.</h2></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url==='/node'){
        // console.log('Welcome to my Node Js project')

    res.write('<html>');
    res.write('<head><title>My title!</title></head>');
    res.write('<body><h2>Welcome to node.</h2></body>');
    res.write('</html>');
    return res.end();
    }

    res.setHeader("Content-Type",'text/html');
    res.write('<html>');
    res.write('<head><title>My title!</title></head>');
    res.write('<body><h2>Welcome to my node.js project.</h2></body>');
    res.write('</html>');
    res.end();
})


server.listen(4000);

// Node.js employs an event-driven architecture, featuring a 
// single-threaded event loop. It operates asynchronously, 
// executing non-blocking I/O operations, enabling efficient 
// handling of multiple concurrent connections. Objects like 
// EventEmitters emit named events, while event handlers, 
// implemented as callback functions, respond to these events 
// asynchronously. This architecture fosters scalability and 
// performance by efficiently managing I/O operations and event
//  handling, making Node.js ideal for building high-performance,
//   real-time applications.

// q2-
// Node.js can efficiently handle thousands of requests per second 
// despite being single-threaded due to its non-blocking, 
// asynchronous I/O model. Instead of waiting for each I/O operation 
// to complete before moving on to the next one, Node.js initiates 
// operations and continues processing other tasks. This enables it 
// to handle numerous concurrent connections without being blocked, 
// maximizing CPU utilization. Additionally, Node.js utilizes 
// event-driven architecture, efficiently managing events and 
// callbacks, reducing overhead. Furthermore, it can employ 
// clustering to leverage multi-core systems, spawning child 
// processes to distribute the workload, enhancing scalability 
// and performance.


// q3-
// process.exit() is a method in Node.js used to forcefully terminate
//  the Node.js process. When called without an argument, it exits 
//  the process with a default exit code of 0, indicating successful 
//  termination. Alternatively, you can provide an exit code as an 
//  argument to process.exit() to indicate a specific status or error 
//  condition. This method immediately stops the execution of the 
//  Node.js program, running any registered exit event handlers 
//  before exiting. It's important to use process.exit() carefully, 
//  especially in production code, as it abruptly terminates the 
//  program without allowing any pending asynchronous operations or 
//  event loop tasks to complete.

// q4-
// In the context of a Node.js web server using frameworks like 
// Express.js, req.url, req.headers, and req.method are properties 
// of the req object, which represents the HTTP request received by 
// the server.

// req.url: Contains the URL path of the incoming request. For 
// example, if a client sends a request to http://example.com/api/users,
//  req.url would be '/api/users'.

// req.headers: Contains an object representing the HTTP headers of 
// the incoming request. These headers include information such as 
// the content type, user-agent, and any custom headers provided by 
// the client.

// req.method: Contains the HTTP method used by the client for the 
// request, such as GET, POST, PUT, DELETE, etc. It indicates the 
// type of operation the client wants to perform on the resource.


// const http = require('http');
// const url = require('url');
// const qs = require('querystring');

// const server = http.createServer((req, res) => {
//   const { pathname, query } = url.parse(req.url, true);

//   if (req.method === 'GET' && pathname === '/') {
//     let inputContent = '';
//     if (query.content) {
//       inputContent = query.content;
//     }
    
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(`
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Node.js Input Display</title>
//       </head>
//       <body>
//         <h1>Node.js Input Display</h1>
//         <form method="post" action="/">
//           <label for="content">Type something:</label><br>
//           <input type="text" id="content" name="content" value="${inputContent}"><br>
//           <button type="submit">Submit</button>
//         </form>
//       </body>
//       </html>
//     `);
//     res.end();
//   } else if (req.method === 'POST' && pathname === '/') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });

//     req.on('end', () => {
//       const formData = qs.parse(body);
//       const content = formData.content;

//       res.writeHead(302, { 'Location': `/?content=${encodeURIComponent(content)}` });
//       res.end();
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.write('404 Not Found');
//     res.end();
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
