function add(numbers) {
    const sum = numbers.reduce((total, amount) => total + amount);
    return sum;

    // return numbers.reduce((acc, n) => acc + n);
}

module.exports = add;
