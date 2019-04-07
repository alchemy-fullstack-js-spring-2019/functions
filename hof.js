function numberMan(n, callback) {
  return callback(n);
}
   
function repeater(n, callback) {
  [...Array(n)].forEach(callback);
}
   
module.exports = { numberMan, repeater };
   
   
 
