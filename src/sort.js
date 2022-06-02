const maxValue = require("./maxValue");
const minValue = require("./minValue");

function sortMinMaxValue(array) {
  let newArr = [...new Set(array)];

  const maxPosition = maxValue(newArr);
  let count = 0;
  

  for (let i = maxPosition; i < (newArr.length - 1) -1; i++) {
    count++;
  }

  const minPosition = minValue(newArr);

  for (let j = minPosition; j > 0; j--) {
    count++;
  }

  return { array: newArr, count: count };
}

module.exports = sortMinMaxValue;
