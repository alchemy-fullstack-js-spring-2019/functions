const isEven = num => num % 2 === 0;

const everyEven = array => array.every(isEven);

module.exports = everyEven;
