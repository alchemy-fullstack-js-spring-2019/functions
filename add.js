function add(array){
    const reducer = (acccumulator, currentValue) => acccumulator + currentValue;
    return array.reduce(reducer);
    //alternatively .reduce((acc,n) => acc + n);
}

module.exports = add;
