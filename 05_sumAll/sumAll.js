const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
      } else {
//Code to build num Array starts
        let numArray = [];
        let currentNum;

        if (num1 < num2) {
            currentNum = num1;
            while (currentNum < num2 + 1) {
              numArray.push(currentNum);
              currentNum++;
            }
        } else if (num2 < num1) {
            currentNum = num2;
            while (currentNum < num1 + 1) {
              numArray.push(currentNum);
              currentNum++;
            }
        }
  //Code to build num Array ends, Code to add integers starts
        let total = numArray[0];

        for (let i = 1; i < numArray.length; i++) {
          total = total + numArray[i];
        }

        return total;

      }

};

// Do not edit below this line
module.exports = sumAll;
