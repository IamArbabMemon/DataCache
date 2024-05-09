const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;

function processUserInput(userInput) {
  
  const arr = ['humdan', 'akbar', 'ahsan'];

  console.log(arr.includes(userInput));
  console.log(typeof arr.find((name) => name === userInput));

  count++;

  if (count < 3) {
    rl.question('Enter something: ', processUserInput);
  } else {
    rl.close();
  }

}

rl.question('Enter something: ', processUserInput);
