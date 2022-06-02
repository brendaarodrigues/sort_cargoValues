function minValuePosition (array) {
  let index = Math.min(...array)

  return array.indexOf(index)
};

module.exports = minValuePosition
