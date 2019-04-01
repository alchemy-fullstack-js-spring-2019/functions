// Create an `add.js` and `add.test.js` file
// * create an `add` function that takes an array
//   and returns the sum of all items in the array
// * HINT: use `reduce`

//acc = accumulator

function add(array) {
    const sum = array.reduce((acc, i) => acc + i);
    return sum;
}

module.exports = add;
