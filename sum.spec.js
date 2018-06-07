const sum = require('./sum');

test('it makes a sum', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
