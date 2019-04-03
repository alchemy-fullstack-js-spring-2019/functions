const power = require('./power.js');
 
describe('power function', () => {
  it('takes two to the power of 2', () => {
    const result = power(2, 2);
    expect(result).toEqual(4);
  });
});
