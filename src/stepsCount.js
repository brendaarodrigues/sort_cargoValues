const maxValue = require("./maxValue");
const minValue = require("./minValue");

function stepsCount(array) {
  let newArr = [...new Set(array)];

  let maxPosition = maxValue(newArr);
  let minPosition = minValue(newArr);
  let count = 0;
  let swapMax = newArr.length - 1 - maxPosition;
  let swapMin = minPosition;

  count = swapMin + swapMax + (minPosition > maxPosition ? -1 : 0);

  return { array: newArr, count: count };
}

module.exports = stepsCount;
