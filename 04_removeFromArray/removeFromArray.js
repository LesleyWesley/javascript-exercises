const removeFromArray = function(array, ...itemsToRemove) {
    for (let item of itemsToRemove) {
        if (array.includes(item)) {
          array.splice(array.indexOf(item), 1);
        }
      }

      return array;
};

// Do not edit below this line
module.exports = removeFromArray;
