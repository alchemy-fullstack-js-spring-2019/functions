function double(n) {
    return n * 2;
}

function doubleArray(arr) {
    //return arr.map(n => n * 2);
    //return arr.map(n => double(n));
    return arr.map(double);
}

//export default double;
module.exports =  {
    double,
    doubleArray
};