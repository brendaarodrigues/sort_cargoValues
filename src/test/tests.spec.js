const testArray = require("./stepsCount");
const stepsCount = require("../stepsCount");

test.each([...testArray])(
  "Deve retornar a quantidade de passos necessários para ordenar a carga.",
  ({ cargo, expected }) => {
    const newCargo = stepsCount(cargo);
    console.log(newCargo.count);
    expect(newCargo.count).toBe(expected);
  }
);
