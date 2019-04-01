function repeater(n, callback) {
  for(let i = 0; i < n; i++) {
    callback();
  }
  // ... means spread
  // [...Array(n)]
  //   .forEach(callback);
  
}
module.exports = repeater;
