const http = require('http');

function saludar() {
  return "Hola Profesores!";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end(saludar());
});

// Render usa la variable PORT automáticamente
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = saludar;