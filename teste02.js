import rl from 'readline-sync';

// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar a variável de tentativa do usuário
let tentativa;

// Iniciar o loop do-while
do {
    // Solicitar ao usuário que faça uma tentativa
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");

    // Verificar se a tentativa está correta, maior ou menor que o número aleatório
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }

    // Continuar o loop enquanto a tentativa estiver incorreta
} while (tentativa !== numeroAleatorio);



// 01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.

// Inicializar os dois primeiros números da sequência de Fibonacci
/*
let anterior = 0;
let atual = 1;

// Imprimir os dois primeiros números da sequência de Fibonacci
console.log(anterior);
console.log(atual);

// Loop para calcular e imprimir os próximos 18 números da sequência
for (let i = 3; i <= 20; i++) {
    // Calcular o próximo número da sequência como a soma dos dois números anteriores
    let proximo = anterior + atual;

    // Imprimir o próximo número da sequência
    console.log(proximo);

    // Atualizar os valores dos dois números mais recentes na sequência para os próximos cálculos
    anterior = atual;
    atual = proximo;
}
*/
// 02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o valor de imposto de renda a ser pago.
// Calcule o total de Imposto de Renda a ser pago  conforme a tabela abaixo:
// Salário <= R$ 2.100,00 = isento
// Salário <= R$ 2.800,00 = 7,5%
// Salário <= R$ 3.750,00 = 15%
// Salário <= R$ 4.660,00 = 22.5%
// Salário > R$ 4.660,00 = 27.5%

import rl from 'readline-sync';

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    // Calcular o imposto de renda conforme a tabela
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    // Imprimir o nome e o valor do imposto de renda
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}

// 01-Escreva um programa que itere sobre as propriedades de um objeto e imprima suas chaves e valores.
console.log("\t--- Exercício 01 ---")
// Definir um objeto com algumas propriedades
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 02-Escreva um programa que itere sobre os elementos de um array e imprima seus valores.
console.log("\n\t--- Exercício 02 ---")
// Definir um array com alguns valores
const cores = ["Azul", "Branco", "Amarelo", "Verde", "Vermelho"];

// Iterar sobre os elementos do array usando for...of
for (let cor of cores) {
    // Imprimir o valor do elemento
    console.log(cor);
}

// 03-Escreva um programa que itere sobre os caracteres de uma string e imprima cada caractere.
console.log("\n\t--- Exercício 03 ---")
// Definir uma string
const string = "JavaScript";

// Iterar sobre os caracteres da string usando for...of
for (let caractere of string) {
    // Imprimir o caractere
    console.log(caractere);
}

import rl, { questionInt } from 'readline-sync';

// 01-Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
/*
let num = rl.questionInt("Informe o número da tabuada: ");
let cont = 0;
while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}`);
    cont++;
}
*/

// 02-Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
// O Programa deverá:
// Ler o número de alunos da turma;
// Ler as notas dos 4 bimestres de cada aluno;
// Calcular e imprimir a média do aluno;
// Calcular e imprimir a média da turma.

// Ler número de alunos da turma
let numAlunos = rl.questionInt("Informe o número de alunos da turma: ")

// Variáveis para armazenar a soma das médias de todos os alunos e o contador de aluno atual
let somaMedias = 0;
let contadorAlunos = 1;

// Loop enquanto ainda houver alunos a serem processados
while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);

    // Variável para armazenar a soma das notas do aluno
    let somaNotas = 0;
    let contadorBimestres = 1;

    // Loop para ler as notas dos 4 bimestres de cada aluno
    while (contadorBimestres <= 4) {
        let nota = rl.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas = somaNotas + nota;
        contadorBimestres++;
    }

    // Calcular a média do aluno
    let mediaAluno = somaNotas / 4;

    // Adicionar a média do aluno à soma das médias
    somaMedias += mediaAluno;

    // Imprimir a média do aluno
    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);

    // Avançar para o próximo aluno
    contadorAlunos++;
}

// Calcular a média geral da turma
let mediaGeralTurma = somaMedias / numAlunos;

// Imprimir a média geral da turma
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);


//Criando um objeto literal
var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
};

//Recuperando os dados do objeto
console.log(produto.id); // 9
console.log(produto.nome); // Cafeteira Elétrica
console.log(produto.valor); // 99.00

//Criando um objeto literal
var cliente = {
    id: 40,
    nome: "Jorge Mendes",
    telefone: "(21) 9999-9999"
};

//Recuperando os dados do objeto
console.log(cliente.id); // 40
console.log(cliente.nome); // Jorge Mendes

const carro = {
    marca: "Ford",
    modelo: "Fiesta",
    irPara: function (destino) {
      console.log(`Indo para ${destino}`);
    },
  };
  
  carro.irPara("Roma");
  
  const car = {
    marca: "Ford",
    modelo: "Fiesta",
    ligar: function () {
      console.log(`${this.marca} ${this.modelo} ligado!`);
    },
  };
  
  car.ligar();