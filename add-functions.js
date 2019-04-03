function add(array){
  let sum = array.reduce((total, current) => total + current);
  return sum;
}

module.exports = add;
