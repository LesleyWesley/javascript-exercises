const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {

  if (numArray.length < 1) {
    return 0;
  } else {
    let total = numArray[0];

    for (let i = 1; i < numArray.length; i++) {
      total = total + numArray[i];

    }

    return total;
  }
};

const multiply = function(numArray) {
  let total = numArray[0];

  for (let i = 1; i < numArray.length; i++) {
     total = total * numArray[i];
   }

  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {

  if (num === 0) {
    return 1;
  } else {
  
      //Creates array
      let currentNum = num;
      let array = [];

      while (currentNum > 0) {
        array.push(currentNum);
        currentNum--;
      }

      //Multiplies array items

      let total = array[0];

      for (let i = 1; i < array.length; i++) {
        total = total * array[i];
      }

      return total;
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
