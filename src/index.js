const parse = require("nodemon/lib/cli/parse");
const myInterface = require("./interface");
const sortMinMaxValue = require("./sort");
const validateCargo = require("./validate");

async function cargoTransport() {
  let cargo = await myInterface();
  let modifiedCargo = "";

  cargo = cargo.trim();
  cargo = cargo.split(/(?:,| )+/);

  let isValid = validateCargo(cargo);

  if (isValid.letter || isValid.zero) {
    if (isValid.letter) console.log("O peso da carga deve ser escrito em números.");

    if (isValid.zero) console.log("O peso de uma carga não pode ser zero.");

  } else {
    modifiedCargo = cargo.map((i) => {
      return parseInt(i);
    });

    console.log(`\nCarga recebida: ${modifiedCargo}`);

    modifiedCargo = sortMinMaxValue(modifiedCargo);

    console.log(`Quantidade de passos necessários para a ordenação das cargas: ${modifiedCargo.count} \n`);
  }

  cargoTransport();
}

cargoTransport();

module.exports = cargoTransport;