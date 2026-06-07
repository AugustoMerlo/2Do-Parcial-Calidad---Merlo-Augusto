const http = require('http');
const handler = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // `handler` is the exported function from `app.js` (Vercel-style)
  handler(req, res);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
