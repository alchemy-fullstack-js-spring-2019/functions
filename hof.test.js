
const {numberMan, repeater} = require('./hof');


describe('it manipulates numbers', () => {
it('can manipulate a number', () => {
  const mock = jest.fn();

});
  const result = (8)
  expect(numberMan(mock))
});

it('it can repeat a function multiple times', () =>{
  const mock = jest.fn();
  repeater(10, mock);
  expect(mock).toHaveBeenCalledTimes(10);
});
