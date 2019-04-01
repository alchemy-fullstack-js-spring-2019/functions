function numberMan(n, callback) {
    return callback(n);
}

function repeater(n, callback) {
    let i = 0;
    while(i < n) {
        callback();
        i++;
    }
    //or a for loop... or [...Array(n)].forEach(callback);
}
module.exports = {
    numberMan, repeater
};
