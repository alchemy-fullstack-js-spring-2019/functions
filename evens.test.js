const { evens,
  firstEven,
  allEven,
  addEven
} = require('./evens');

describe('one test returns only even nums, other only the first even num', () => {
  describe('two tests that return even numbers', () => {
    describe('takes an array and returns only even numbers', () => {
      it('returns only evens from [1, 8, 5, 4]', () => {
        expect(evens([1, 8, 5, 4])).toEqual(
          [8, 4]
        );
      });
      it('returns only evens from [3, 7, 6, 2]', () => {
        expect(evens([3, 7, 6, 2])).toEqual(
          [6, 2]
        );
      });
    });

    describe('takes an array and returns only the first even number', () => {
      it('returns only first even num from [1, 8, 5, 4]', () => {
        expect(firstEven([1, 8, 5, 4])).toEqual(1);
      });
      it('returns only first even num from [3, 7, 6, 2]', () => {
        expect(firstEven([3, 7, 6, 2])).toEqual(2);//the index not the #
      });
    });

    describe('returns true if all in array are even nums, else false', () => {
      describe('returns true if all in [1, 2, 9, 4] are even numbers, else returns false', () => {
        it('returns true only if [1, 2, 9, 4] are all even nums', () => {
          expect(allEven([1, 8, 5, 4])).toBeFalsy();
        });
        it('returns true only if [4, 2, 12, -8] are all even nums', () => {
          expect(allEven([4, 2, 12, -8])).toBeTruthy();
        });
      });
    });

    describe('returns sum of all even numbers in array', () => {
      describe('returns sum of all evens in th two arrays', () => {
        it('returns the sum of evens in [1, 2, 9, 4]', () => {
          expect(addEven([1, 2, 9, 4])).toEqual(6);
        });
        it('returns the sum of evens in [4, 2, 12, -8]', () => {
          expect(addEven([4, 2, 12, -8])).toEqual(10);
        });
      });
    });
  });
});
//lunch: disable auto fill
