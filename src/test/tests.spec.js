const orderedCargo = require("./orderedCargo");
const stepsCount = require("./stepsCount");
const sortLoop = require("../sortLoop");

test.each([...orderedCargo])(
  "Deve retornar a carga ordenada do menor para maior peso.",
  ({ cargo, expected }) => {
    const newCargo = sortLoop(cargo);
    console.log(newCargo.array);
    console.log(newCargo.count);
    console.log(expected);
    expect(newCargo.array).toEqual(expected);
  }
);

test.each([...stepsCount])(
  "Deve retornar a quantidade de passos necessários para ordenar a carga.",
  ({ cargo, expected }) => {
    const newCargo = sortLoop(cargo);
    console.log(newCargo.count);
    expect(newCargo.count).toEqual(expected);
  }
);
