function addArray(array) {
  return array.reduce(function(total, num) {
    return total + num;
  }); 
}

module.exports = addArray;