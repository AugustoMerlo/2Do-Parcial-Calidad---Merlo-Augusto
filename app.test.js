const saludar = require('./app');

test('debe retornar Hola Mundo', () => {
  expect(saludar()).toBe("Hola Mundo");
});