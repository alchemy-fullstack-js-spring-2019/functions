function add(array) {
  return array.reduce((total, num) => 
    total + num);
}

module.exports = add;
