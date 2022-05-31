module.exports = Array.prototype.sort = function () {
  let stepsCount = 0;
  let swap;

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        swap = this[j];
        this[j] = this[j + 1];
        this[j + 1] = swap;
      }
    }
    stepsCount++;
  }

  return { array: this, count: stepsCount };
};
