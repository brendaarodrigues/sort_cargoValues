function maxValuePosition (array) {
  let index = Math.max(...array)

  return array.indexOf(index)
};

module.exports = maxValuePosition
