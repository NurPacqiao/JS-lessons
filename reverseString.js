const reverseString = function(str) {
let arr = [];
arr = str.split('');
for(let i = 0; i < (arr.length / 2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[length - 1 - i] = temp;
}
return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
