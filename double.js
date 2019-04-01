function double(number) {
    return number * 2;
}
// const double = n => n * 2; double as an arrow function

function doubleArray(numbers) {
    // let doubledNumbers = numbers.map(function(number) { 
    //     return double(number);
    // });
    // return doubledNumbers;

    //return numbers.map(n => n * 2);

    //return numbers.map(n => double(n));  since the arguments are the same and both only take one argument, it can be collapsed

    return numbers.map(double);  //refactor
}

module.exports = { double, doubleArray };
