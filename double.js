function double(num) {
    return num * 2;
}

function arrayDouble(array) {
    return array.map(double);  
    //could also do array.map(n => n * 2);
    //additionally array.map(n => double(n)); 
}

module.exports = {
    double,
    arrayDouble
};
