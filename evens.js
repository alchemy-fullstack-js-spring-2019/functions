function evens(array) {
  return array.filter(even);
}

function even(number) {
  if(number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = evens;
