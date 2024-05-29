const http = require('http');

const routes =require('./routes');

console.log(routes.someText);

const server =http.createServer(routes.handler);

server.listen(3000);

// --save-dev
// This flag is used to add a package as a development dependency.
//  Development dependencies are packages that are only needed 
//  during the development and testing phases of your project, 
//  and are not required in the production environment. 

// --save
// This flag is used to add a package as a regular dependency,
// meaning it's needed for the application to run in production.
// These dependencies are listed in the dependencies section of
// your package.json file. This flag has been mostly deprecated 
// because it's the default behavior now when you run npm install
// <package-name> without any flags.