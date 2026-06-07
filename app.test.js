const { saludar } = require('./app');

test('debe retornar Hola Compas', () => {
  expect(saludar()).toBe("<h1>Hola Compas</h1>");
});