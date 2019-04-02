function numberManipulator(n, callback){
    return callback(n);
}

function repeater(n, callback){
    for(let i = 0; i < n; i++){
        callback();
    }
}

function mapp(arr, callback){
    let array = [];
    arr.forEach(item => array.push(callback(item)));
    return array;
}

module.exports = {
    numberManipulator,
    repeater,
    mapp
};


