function minValuePosition (array) {
  index = Math.min(...array)

  return array.indexOf(index)
};

module.exports = minValuePosition
