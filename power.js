function pow(base, exponent) {
  if(exponent === 0) {
    return 1;
  }
  let result = base;
  for(let i = 1; i < exponent; i ++) {
    result = result * base;
  }
  return result;
}

module.exports = pow;
