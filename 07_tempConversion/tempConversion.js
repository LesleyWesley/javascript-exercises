const convertToCelsius = function(temp) {
  let newTemp = ((temp - 32) * (5/9));

  if (Number.isInteger(newTemp)) {
    return newTemp;
  } else {
    return Number(newTemp.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let newTemp = ((temp * 1.8) + 32);

  if (Number.isInteger(newTemp)) {
    return newTemp;
  } else {
    return Number(newTemp.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
