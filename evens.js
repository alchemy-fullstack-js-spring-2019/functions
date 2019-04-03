const isEven = n => n % 2 === 0;
const add = require ('./add');

// const evens = arr => {
//     return arr.filter(isEven);
//     // return arr.filter(n => {
//         // return n % 2 === 0;
//     // });
// };

// function filter(arr, callback) {
//     const filteredArr = [];
//     for(let 1 = 0; i < arr.length; i++) {
//         filteredArr[filteredArr.length] = arr[i];
//     }
// }

const evens = arr => arr.filter(isEven);

// const firstEven = arr => findIndex(isEven);

const firstEven = arr => {
    return arr.findIndex(isEven);
}

const allEvens = arr => {
    return arr.every(isEven);
}

const addEvens = arr => {
    return add(evens(arr));
}

module.exports = {
    evens,
    firstEven,
    allEvens,
    addEvens
};
