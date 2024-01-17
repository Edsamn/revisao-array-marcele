// Exercício 1: Manipulação de Arrays
// Dado o array abaixo, realize as seguintes operações:
// const numeros = [1, 2, 3, 4, 5];

// 1. Adicione o número 6 no final do array.
// 2. Remova o último elemento do array.
// 3. Multiplique todos os elementos do array por 2.
// 4. Remova o primeiro elemento do array.
// 5. Adicione o número 0 no início do array.
// 6. Filtre apenas os números pares do array.
// 7. Some todos os elementos do array.

// Após realizar essas operações, exiba o array resultante e o resultado da soma.
// Fazer pseudo-código, diagrama e código.
const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
let dobro = numeros.map((numero) => numero * 2);
console.log(dobro);
numeros.shift();
console.log(numeros);
numeros.unshift(0);
let filtro = numeros.filter((numero) => numero % 2 === 0);
console.log(filtro);
let soma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(soma);

// Exercício 2: Transformação de Strings

// Dada a string abaixo, realize as seguintes operações:
//const frase = "Esta é uma frase de exemplo";

// 1. Converta a string em um array de palavras.
// 2. Adicione a palavra "muito" no final do array.
// 3. Remova a última palavra do array.
// 4. Transforme todas as palavras para letras maiúsculas.
// 5. Remova a primeira palavra do array.
// 6. Adicione a palavra "Programação" no início do array.
// 7. Filtre apenas as palavras que começam com a letr
// 8. Concatene as palavras do array em uma única string.

// Após realizar essas operações, exiba a string resultante.
// Fazer pseudo-código, diagrama e código.

const fraseArray = []