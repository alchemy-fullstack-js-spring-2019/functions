function evens(array) {
    let evenArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    return evenArray;
}

function firstEven(array) {
    let index = null;
    array.forEach(num => {
        if(num % 2 === 0) {
            index = array.indexOf(num);
        }
    });

    return index;
}

module.exports = {
    evens,
    firstEven
};
