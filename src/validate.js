module.exports = function validateCargo(cargo) {
  let validateLetter = false;
  let validateZero = false;

  cargo.forEach((element) => {
    if (isNaN(element)) validateLetter = true;
    if (element == 0) validateZero = true;
  });

  return {
    letter: validateLetter,
    zero: validateZero,
  };
};
