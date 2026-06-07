const { saludar } = require('./app');

test('debe retornar Hola Mundo', () => {
  expect(saludar()).toBe("<h1>Hola Mundo</h1>");
});