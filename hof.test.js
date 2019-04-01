const { double } = require('./double');
const power = require('./power');
const { numberManipulator } = require('./hof');

describe('number manipulator test', () => {
    describe('double a number', () => {
        it('takes 2 and returns 4', () => {
            const result = numberManipulator(2, double);
            expect(result).toBe(4);
        });
        it('takes 10 and returns 20', () => {
            const result = numberManipulator(10, double);
            expect(result).toBe(20);
        });
    });
    describe('cube a number', () => {
        it('takes 3 and returns 9', () => {
            const result = numberManipulator(3, power);
            expect(result).toBe(27);
        });
    });
});
