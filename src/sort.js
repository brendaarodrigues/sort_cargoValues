const maxValue = require("./maxValue");
const minValue = require("./minValue");

function sortMinMaxValue(array) {
  let newArr = [... new Set(array)]
  const maxPosition = maxValue(newArr);

  let aux;
  let count = 0;

  for (let i = maxPosition; i < newArr.length - 1; i++) {
    aux = newArr[i];
    newArr[i] = newArr[i + 1];
    newArr[i + 1] = aux;
    count++;
  }

  const minPosition = minValue(newArr);

  for (let i = minPosition; i > 0; i--) {
    aux = newArr[i];
    newArr[i] = newArr[i - 1];
    newArr[i - 1] = aux;
    count++;
  }

  return { array: newArr, count: count };
}

module.exports = sortMinMaxValue;
