function add(array){
    const reducer = (acccumulator, currentValue) => acccumulator + currentValue;
    return array.reduce(reducer);
}

module.exports = add;
