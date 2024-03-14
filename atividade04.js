import ds from 'readline-sync';

//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
//imprima a tabuada desse número usando um loop while.
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
let cont = 0;

let alunos = ds.questionInt("Digite o número de alunos:");
let nts1 = ds.questionFloat("Digite a nota do 1º bimestre:");
let nts2 = ds.questionFloat("Digite a nota do 2º bimestre:");
let nts3 = ds.questionFloat("Digite a nota do 3º bimestre:");
let nts4 = ds.questionFloat("Digite a nota do 4º bimestre:");
while(cont = alunos) {
}



console.log('--------------------------------------------DoWhile------------------------------------------');
//01. a) Escreva um programa que simule um jogo de adivinhação onde o usuário deve adivinhar um número aleatório entre 1 e 100. O programa deve fornecer dicas sobre se o número digitado é maior ou menor que o número aleatório. O jogo deve continuar até que o usuário adivinhe corretamente.
