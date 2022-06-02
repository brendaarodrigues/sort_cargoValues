const stepsCount = require("./stepsCount");
const sort = require("../sort");

test.each([...stepsCount])(
  "Deve retornar a quantidade de passos necessários para ordenar a carga.",
  ({ cargo, expected }) => {
    const newCargo = sort(cargo);
    console.log(newCargo.count);
    expect(newCargo.count).toBe(expected);
  }
);
