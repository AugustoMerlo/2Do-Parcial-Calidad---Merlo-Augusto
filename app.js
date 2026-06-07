function saludar() {
  return "<h1>Chau Mundo</h1>";
}

// 1. Esto es lo que lee Vercel para mostrar tu página web
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(saludar());
};

// 2. Exportamos la función específica para que Jest la pueda probar
module.exports.saludar = saludar;