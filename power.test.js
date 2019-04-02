const pow = require('./power');

describe('power function', () => {
  it('raises 2 to 3', () => {
    const result = pow(2, 3);
    expect(result).toEqual(8);
  });
  
  it('raises 2 to 0', () => {
    const result = pow(2, 0);
    expect(result).toEqual(1);
  });
  
  it('raises 1 to 10', () => {
    const result = pow(1, 10);
    expect(result).toEqual(1);
  });
  
});
