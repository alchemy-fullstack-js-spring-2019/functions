function power(num, exp) {
  let total = num;
  for(let i = 0; i < exp - 1; i++) {
    total *= num;
  }
  return total;
  // return Math.pow(num, exp)l
  // return num ** exp;
}

module.exports = power;
