const addArray = require('./add');
const isEven = n => n % 2 === 0;

const evens = array => array.filter(isEven);

const firstEven = array => array.findIndex(isEven);

const allEven = array => array.every(isEven);

function addEvens(array) {
    let evenArray = evens(array);
    return addArray(evenArray);
}

  
module.exports = {
    evens,
    firstEven, 
    allEven,
    addEvens
};
