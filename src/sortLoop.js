const cargoSort = require("./sort");
const validate = require("./validate");

function loop(cargo) {
  return cargo.sort();
}

module.exports = loop;
