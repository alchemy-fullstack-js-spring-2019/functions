function add(arr) {
    // return arr.reduce(acc, n_ => {
    //     return acc + n;
    // });
    return arr
        .reduce((acc, n) => acc + n);
}

module.exports = add;