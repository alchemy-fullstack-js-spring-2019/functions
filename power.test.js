const power = require('./power');


describe('raises a number specified to the power specified', ()=> {
  it('raises 2 to the 3rd power', () => {
    expect(power(2, 3)).toEqual(8);
  });
    

  it('raises 100 to the 0th power', () => {
    expect(power(100, 0)).toEqual(1);
  });

  it('raises 40 to the 1th power', () => {
    expect(power(40, 1)).toEqual(40);
  });
});
