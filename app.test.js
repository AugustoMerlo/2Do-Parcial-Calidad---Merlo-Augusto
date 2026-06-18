const { saludar } = require('./app');

test('debe retornar Saludos', () => {
  expect(saludar()).toBe("<h1>Saludos</h1>");
});