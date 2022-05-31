const readline = require("readline");

async function myInterface() {
  const readlines = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    return readlines.question(
      "Quais são os pesos das cargas? \n",
      async (response) => {
        readlines.close();
        return resolve(response);
      }
    );
  });
}

module.exports = myInterface;
