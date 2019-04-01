const { numberManipulator, repeater, mapp } = require('./hoc');

describe('hoc functions', ()=>{
    it('takes a number and a call back.  returns manipulated number', ()=>{
        const mockCallBack = jest.fn(); 
        numberManipulator(5, mockCallBack);
        expect (mockCallBack.mock.calls.length).toBe(1);//same as below
        expect (mockCallBack).toHaveBeenCalledTimes(1);//same as above
    });
});

describe('hoc functions', ()=>{
    it('takes n and a call back.  runs callback n times', ()=>{
        const mockCallBack = jest.fn(); 
        repeater(5, mockCallBack);
        expect (mockCallBack.mock.calls.length).toBe(5);//same as below
        expect (mockCallBack).toHaveBeenCalledTimes(5);//same as above
    });
});


describe('hoc functions', ()=>{
    it('takes array and callback, runs call back for each array item', ()=>{
        const mockCallBack = jest.fn(n=>n + 1); 
        let value = mapp([1, 2, 3], mockCallBack);
        console.log('value', value);
        expect (value.length).toBe(3);
    });
});
