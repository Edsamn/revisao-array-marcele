// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.
// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let desempregadas = [];
let salarioMenor2500 = [];
let salarioMaior2500 = [];

let pessoa = {};

do {
  var pessoaNova = { ...pessoa };
  pessoaNova.nome = String(prompt("Digite o nome"));
  pessoaNova.idade = Number(prompt("Digite a idade"));
  pessoaNova.trabalho = confirm("Está trabalhando?");
  if (pessoaNova.trabalho === true) {
    pessoaNova.salario = Number(prompt("Digite o salário"));
  }

  if (pessoaNova.trabalho === false) {
    desempregadas.push(pessoaNova);
  } else if (
    pessoaNova.trabalho === true &&
    pessoaNova.salario > 0 &&
    pessoaNova.salario <= 2500
  ) {
    salarioMenor2500.push(pessoaNova);
  } else {
    salarioMaior2500.push(pessoaNova);
  }
} while (confirm("Deseja continuar?") === true);

console.log("Pessoas desempregadas:", desempregadas);
console.log(
  "Pessoas empregadas com salários menores que 2500:",
  salarioMenor2500
);
console.log(
  "Pessoas empregadas com salários maiores que 2500:",
  salarioMaior2500
);
