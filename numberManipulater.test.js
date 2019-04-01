const { double } = require('./double');
const numberManipulator = require('./numberManipulater');

describe('number manipulator higher order function', () => {
    it('function which takes a num and callback which doubles the number', ()=> {
        const mock = jest.fn(double);
        const result = numberManipulator(5, mock);
        expect(result).toEqual(10);
        expect(mock).toHaveBeenCalledWith(5);
        expect(mock).toHaveBeenCalledTimes(1);
        //expect mock to be called once
        //expect that the mock is called with 5
    }); 
});

