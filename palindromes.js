const palindromes = function (str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let arr =cleanedStr.split('');
        for(let j = 0; j < Math.floor(arr.length / 2); j++){
            if(arr[j] !== arr[arr.length - j - 1]){
                console.log("This is not a palindrome");
                return false;
            }
        }
        return true;
};

// Do not edit below this line
module.exports = palindromes;
