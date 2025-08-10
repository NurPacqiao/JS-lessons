const findTheOldest = function(arr) {
    let oldest = 0, old;
    let oldestPerson = null;
    let current = new Date().getFullYear();
    for(let i = 0; i < arr.length; i++){
        if(arr[i].yearOfDeath === undefined){
            old = current - arr[i].yearOfBirth;
        }
        else{
            old = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        if(old > oldest){
            oldest = old;
            oldestPerson = arr[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
