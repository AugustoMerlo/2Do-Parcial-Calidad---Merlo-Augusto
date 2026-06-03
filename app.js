const http = require('http');

function saludar() {
  return "Hola Mundo";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end(saludar());
});

const PORT = process.env.PORT || 3000;

// Solo iniciamos el servidor de Render si NO estamos corriendo pruebas con Jest
if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
}

module.exports = saludar;