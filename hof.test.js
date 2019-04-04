const { numberManipulator, repeater } = require('./hof');
const { double } = require('./double');

describe('mess with jest mocks', () => {
    it('uses jest mocks', ()=> {
        const mockFn = jest.fn();
        mockFn();
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});


describe('number manipulator higher order function', () => {
    it('function which takes a num and callback which doubles the number', ()=> {
        const mock = jest.fn(double);
        const result = numberManipulator(5, mock);
        expect(result).toEqual(10);
        expect(mock).toHaveBeenCalledWith(5);
        expect(mock).toHaveBeenCalledTimes(1);
    }); 
});

describe('repeater function', () => {
    it('is a function that calls another function multiple times', ()=> {
        const mock = jest.fn();
        repeater(5, mock);
        expect(mock).toHaveBeenCalledTimes(5);
    });
});
