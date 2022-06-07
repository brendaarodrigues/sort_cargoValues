const maxValue = require("./maxValue");
const minValue = require("./minValue");

function stepsCount(array) {
  let newArr = [...new Set(array)];

  let maxPosition = maxValue(newArr);
  let minPosition = minValue(newArr);
  let count = 0;

  array.reduce((_previousValue, _currentValue, index) => {
    if(maxPosition < index) count++

    if(minPosition > index) count++
  })


  return { array: newArr, count: count };
}

module.exports = stepsCount;
