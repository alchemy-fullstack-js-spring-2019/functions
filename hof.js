//numberMan
//numberMan(5, mock)
//expect mock to be called once
//expect mock to be called with 5

function numberMan(n, callback) {
    return callback(n);
}

module.exports = { numberMan };
