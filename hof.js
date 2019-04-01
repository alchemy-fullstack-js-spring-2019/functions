function numberManipulator(num, callback) {
    return callback(num);
}

function repeater(num, callback) {
    for(let i = 0; i < num; i++){
        callback();
    }
}




module.exports = {
    numberManipulator,
    repeater
};
