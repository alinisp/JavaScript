import ds from 'readline-sync';

//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
//imprima a tabuada desse número usando um loop while.
/*
let num = ds.questionInt("Digite um numero:");
let cont = 0; 

console.log("Tabuada de multiplicação - Nº" + num);

while (cont <= 10) {
    let resultado = num * cont;
    console.log(`${num} x ${cont} = ${resultado}` );
    cont++;
}


console.log('--------------------------------------------');
//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
//O Programa deverá:
//Ler o número de alunos da turma;
//Ler as notas dos 4 bimestres de cada aluno;
//Calcular e imprimir a média do aluno;
//Calcular e imprimir a média da turma.

let numAlunos=ds.questionInt("Informe o número de alunos da turma: ")

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
        let nota =ds.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas += nota;
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
*/




/*console.log('--------------------------------------------DoWhile------------------------------------------');
//DoWhile
//01. a) Escreva um programa que simule um jogo de adivinhação onde o usuário deve adivinhar um número aleatório entre 1 e 100. O programa deve fornecer dicas sobre se o número digitado é maior ou menor que o número aleatório. O jogo deve continuar até que o usuário adivinhe corretamente.
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Inicializar a variável de tentativa do usuário
let tentativa;

// Iniciar o loop do-while
do {
    // Solicitar ao usuário que faça uma tentativa
    tentativa = ds.questionInt("Tente adivinhar o número (entre 1 e 100):");

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
*/

/*console.log('--------------------------------------------for------------------------------------------');
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


for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = ds.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = ds.questionFloat(`Informe o salário de ${nome}: `);

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
*/


/*console.log('--------------------------------------------forInOf------------------------------------------');
console.log("\t--- Exercício 01 ---")
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
/*console.log(pessoa.nome)

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
}*/

