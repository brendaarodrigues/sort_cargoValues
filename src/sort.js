const maxValue = require("./maxValue");
const minValue = require("./minValue");

function sortMinMaxValue(array) {
  const maxPosition = maxValue(array);

  let aux;
  let count = 0;

  for (let i = maxPosition; i < array.length - 1; i++) {
    aux = array[i];
    array[i] = array[i + 1];
    array[i + 1] = aux;
    count++;
  }

  const minPosition = minValue(array);

  for (let i = minPosition; i > 0; i--) {
    aux = array[i];
    array[i] = array[i - 1];
    array[i - 1] = aux;
    count++;
  }

  return { array: array, count: count };
}

module.exports = sortMinMaxValue;
