const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const agesArray = [];
    let age;


    //Gets ages and pushes them to their own array
    for(let i = 0; i < array.length; i++) {
      if (array[i].hasOwnProperty("yearOfDeath")) {
        age = array[i].yearOfDeath - array[i].yearOfBirth;
      } else {
        age  = currentYear - array[i].yearOfBirth;
      }

      agesArray.push(age);
    }
    //Finds largest number in ages array
    let highest = 0;
    let index;

    for (let i = 0; i < agesArray.length; i++) {
      if (agesArray[i] > highest) {
        highest = agesArray[i];
        index = i;
      }
    }

    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
