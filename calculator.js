const add = function(a, b) {
	if(typeof a == 'number' && typeof b == 'number'){
    return a + b;
  }
};

const subtract = function(a, b) {
  if(typeof a == 'number' && typeof b == 'number'){
    return a - b;
  }
};

const sum = function(a, b) {
  let sum = a;
  if(typeof a == 'number' && typeof b == 'number'){
    if(b > a) [a, b] = [b, a];
    for(let i = a; i <= b; i++){
      sum += 1;
    }
    return sum;
  }
};

const multiply = function(a, b) {
  if(typeof a == 'number' && typeof b == 'number'){
    return a * b;
  }
};

const power = function(a, b) {
  if(typeof a == 'number' && typeof b == 'number'){
   for(let i = 0; i < b; i++){
    a *= a;
   }
   return a;
  }
};

const factorial = function(a) {
  let facto = 1;
  if(typeof a == 'number'){
    for(let i = a; i > 0; i--){
      facto *= i;
    }
    return facto;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
