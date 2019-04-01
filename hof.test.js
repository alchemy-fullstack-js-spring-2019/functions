const { double } = require('./double');
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
});
