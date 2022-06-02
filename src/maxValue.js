function maxValuePosition(array) {
  index = Math.max(...array);

  return array.indexOf(index);
}

module.exports = maxValuePosition;
