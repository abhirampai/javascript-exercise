const makeOrdinal = (number) => {
  const ordinality = ["th", "st", "nd", "rd"];
  const index = number % 100;
  return (
    String(number) +
    (ordinality[(index - 20) % 10] || ordinality[index] || ordinality[0])
  );
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Number ", (answer) => {
  console.log(makeOrdinal(answer));
  rl.close();
});
