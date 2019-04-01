const isEven = n => n % 2 === 0;

const evens = array => array.filter(isEven);

const firstEven = array => array.findIndex(isEven);

const allEven = array => array.every(isEven);
  
module.exports = {
    evens,
    firstEven, 
    allEven
};
