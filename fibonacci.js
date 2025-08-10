const fibonacci = function(a) {
    let fib = [0, 1];
    for(let i = 2; i <= a; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;