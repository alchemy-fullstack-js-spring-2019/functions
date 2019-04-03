const { add } = require('./add');a

const isEven = n => n % 2 === 0;

const evens = arr => arr.filter(isEven);


const firstEven = arr => arr.findIndex(isEven); 

const allEvens = arr => arr.every(isEven);

const sumEvens = arr => {
  return add(evens)

}



module.exports = {
  evens, firstEven, allEvens, sumEvens
};
