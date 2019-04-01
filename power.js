function power(n, p) {
  let total = 1;
  for(let i = 0; i < p; i++) {
    total *= n;
  }
  return total;
}
module.exports = power;
