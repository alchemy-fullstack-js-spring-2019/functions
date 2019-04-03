function addArray(array) {
    const add = (accumulator, currentVal) => accumulator + currentVal;
    
    return array.reduce(add);
}

module.exports = addArray;
