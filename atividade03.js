import ds from 'readline-sync';

let dias= ds.questionInt('Digite o dia da semana:');

switch (dias) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Inválido!")
        break;
}

console.log('------------------------');

let mes= ds.questionInt('Digite o mes:');

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;

    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Inválido!")
        break;
}
console.log('------------------------');


let calcular= ds.question('Qual operacao deseja usar:');
let num1 = ds.question("Numero 1:");
let num2 = ds.question("Numero 2:");
switch (calcular, num1, num2) {
    case adicao:
        console.log(num1+num2);
        break;
    case subtracao:
        console.log(num1-num2);
        break;
    case multiplicacao:
        console.log(num1*num2);
        break;
    case Divisao:
        console.log(num1/num2);
        break;
    default:
        ("Inválido")
        break;
}
