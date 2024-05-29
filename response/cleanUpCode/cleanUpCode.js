// The event loop in Node.js is a core mechanism enabling non-blocking I/O operations, allowing concurrent handling of tasks despite JavaScript being single-threaded. It processes asynchronous callbacks in a specific order through several phases:

// Timers: Executes setTimeout() and setInterval() callbacks.
// Pending Callbacks: Handles I/O callbacks deferred to the next loop iteration.
// Idle, Prepare: Internal tasks for Node.js.
// Poll: Retrieves new I/O events and executes related callbacks.
// Check: Executes setImmediate() callbacks.
// Close Callbacks: Executes close event callbacks.

// Explanation:
// Start logs immediately.
// Timeout and Immediate are queued, Immediate runs after poll phase.
// After file read, File Read logs, followed by nested Immediate 2 and Timeout 2.
// The event loop ensures efficient handling of asynchronous tasks without blocking the main thread.

const http=require('http');


const requestHandler=(req,res)=>{
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


}
    


// different ways to exports module.

module.exports=requestHandler;

// module.exports={
//     handler:requestHandler,
//     sometext:"contains some text"
// }

// module.exports.handler=requestHandler;
// module.exports.sometext="contains some text";
