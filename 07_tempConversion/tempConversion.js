const convertToCelsius = function(fTemp) {

  let convertedTemp = (fTemp - 32) * (5/9);

  let tempString = convertedTemp.toFixed(1);

  return parseFloat(tempString);
};

const convertToFahrenheit = function(cTemp) {

  let convertedTemp = (cTemp * (9/5)) + 32;

  let tempString = convertedTemp.toFixed(1);

  return parseFloat(tempString);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
