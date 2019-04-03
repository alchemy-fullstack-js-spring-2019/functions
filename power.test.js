const power = require('./power');

describe('Power Function', () =>{
  test('pow integers', () => {
    expect(power(6, 2)).toBe(36);
  });
});
