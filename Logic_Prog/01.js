const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x;
let i = 0;
let t = 0;

rl.question("Digite um número: ", function(answer) {
  x = parseInt(answer);
  readNumber();
});

function readNumber() {
  if (i < x) {
    rl.question("Digite um número: ", function(answer) {
      const e = parseInt(answer);
      t += e;
      i++;
      readNumber();
    });
  } else {
    const a = t / x;
    console.log(i, a);
    rl.close();
  }
}
