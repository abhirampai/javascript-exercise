//Program to swap the case of input

var swapCase = (str) => {
    let arr = [...str]
    arr = arr.map((item) => {
        if(item == item.toLowerCase()){
           return item.toUpperCase();
        }
        return item.toLowerCase();
    })
    console.log(arr.join(''))
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Something ', (answer) => {
  // TODO: Log the answer in a database
  swapCase(answer)

  rl.close();
});
