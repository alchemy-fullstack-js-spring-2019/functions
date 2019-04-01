// function double(n) {
//     return n * 2;
// }

const double = n => n * 2;

function doubleArray(array) {
    return array.map(double);    
}

module.exports = { double, doubleArray };
