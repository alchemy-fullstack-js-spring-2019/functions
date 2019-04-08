function add(numbers) {
    const sum = numbers.reduce((total, amount) => total + amount);
    return sum;
}

module.exports = add;
