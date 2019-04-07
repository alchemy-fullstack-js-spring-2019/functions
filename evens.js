const { add } = require('./add');

const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);


const firstEven = arr => arr.findIndex(isEven); 

const allEvens = arr => arr.every(isEven);

const sumEvens = arr => {
  // return add(evens);
  arr.evens(isEven);
};



module.exports = {
  evens, firstEven, allEvens, sumEvens
};
