
const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/') {
    let inputContent = '';
    if (query.content) {
      inputContent = query.content;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Node.js Input Display</title>
      </head>
      <body>
        <h1>Node.js Input Display</h1>
        <form method="post" action="/">
          <label for="content">Type something:</label><br>
          <input type="text" id="content" name="content" value="${inputContent}"><br>
          <button type="submit">Submit</button>
        </form>
        ${query.content ? `<h2>Typed Content:</h2><p>${query.content}</p>` : ''}
      </body>
      </html>
    `);
    res.end();
  } else if (req.method === 'POST' && pathname === '/') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = qs.parse(body);
      const content = formData.content;

      res.writeHead(302, { 'Location': `/?content=${encodeURIComponent(content)}` });
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
