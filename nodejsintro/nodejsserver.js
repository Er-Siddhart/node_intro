const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Siddharth Saxena");
})

server.listen(4000);



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

