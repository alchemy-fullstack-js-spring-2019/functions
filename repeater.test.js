const repeater = require('./repeater');
const mockCallback = jest.fn();

describe('repeater callback function', () => {
    it('calls a function a declared number of times', () => {
        repeater(4, mockCallback);
        expect(mockCallback).toHaveBeenCalledTimes(4);
    });
});

// function hello() { return 'hello!'; }

// describe('repeater callback with logic function', () => {
//     it('returns hello world the number of times inputted', () => {
//         console.log(hello);
//         const result = repeater(1, hello);
//         console.log(result);
//         expect(result).toBe('hello');
//     });
// });
