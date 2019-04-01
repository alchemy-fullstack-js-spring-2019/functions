function addArray(array) {
    let arrayTotal = array.reduce(function(total, num) {
        return total + num;
     });  
     return arrayTotal;
}

module.exports = addArray;