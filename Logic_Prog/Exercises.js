//01

var i, n;
const v = [];
const u = [];

v[1] = 2.0;
v[2] = 3.0;
v[3] = 4.0;
v[4] = 5.0;
v[5] = 6.0;

console.log(v[4]) 

n = 5;

for (i = 1; i <= n; i++) {
  u[i] = v[i] * i;
}

console.log(u[2], u[4]);

//02

const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var x;
var i = 0;
var t = 0;

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


//03

var t = 1
var m = 5
var c = 10

c = c* ( t + 1)

if(t < m) {
    t = t + 1
}
console.log(c)

//04

var a = 30
var b = 20
var d = a + b

console.log(d)

var b = 10

console.log(b, d)

var d = a + b

console.log(a, b, d)

//05

const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Moisés, bem-vindo ao App Ada Poupança ---");

var saldo = 1000.00;
var poupanca = 500.00;

function realizarOperacao() {
  rl.question("Digite 1 para APLICAR, 2 para RESGATAR e 3 para SAIR: ", function(answer) {
    const i = parseInt(answer);
    
    if (i === 1) {
      rl.question("Valor da aplicação: ", function(answer) {
        const valor = parseFloat(answer);
        if (valor > saldo) {
          console.log("Saldo de conta corrente insuficiente");
        } else {
          saldo -= valor;
          poupanca += valor;
          console.log("Aplicação realizada com sucesso");
        }
        realizarOperacao();
      });
    } else if (i === 2) {
      rl.question("Valor do resgate: ", function(answer) {
        const valor = parseFloat(answer);
        if (valor > poupanca) {
          console.log("Saldo de poupança insuficiente");
        } else {
          saldo += valor;
          poupanca -= valor;
          console.log("Resgate realizado com sucesso");
        }
        realizarOperacao();
      });
    } else if (i === 3) {
      console.log("Até logo!");
      rl.close();
    } else {
      console.log("Opção inválida. Tente novamente.");
      realizarOperacao();
    }
  });
}

realizarOperacao();

//06

const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var nome, dia, mes;

console.log("Bem-vindo(a) ao App Ada");

rl.question("Digite o seu nome: ", function(answer) {
  nome = answer;

  rl.question("Digite o dia que você nasceu: ", function(answer) {
    dia = answer;

    rl.question("Digite o mês que você nasceu: ", function(answer) {
      mes = answer;

      console.log("Login:", dia + nome + mes);

      rl.close();
    });
  });
});
