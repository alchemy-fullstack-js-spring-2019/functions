
const {numberMan, repeater } = require('./hof');


describe('it manipulates numbers', () => {
  it('can manipulate a number', () => {
    const mock = jest.fn();

    numberMan(5, mock);


  });
});

it('it can repeat a function multiple times', () =>{
  const mock = jest.fn();
  repeater(10, mock);
  expect(mock).toHaveBeenCalledTimes(10);
});
