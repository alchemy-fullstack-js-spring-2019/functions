function power(number, power) {
  let x = 1;
  for(let p = 0; p < power; p++) {
    x = x * number;
  }
  return x;
}

module.exports = power;
