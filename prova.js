/* Alini de Sousa Perroni e Luz Nascimento Miranda*/
import ds from 'readline-sync';

function areaRetangulo(largura, altura){
    areaRetangulo=largura*altura
    return areaRetangulo
};
function areaTriangulo(base, altura){
    areaTriangulo=(base*altura)/2
    return areaTriangulo
};

function areaCirculo(raio){
    areaCirculo= 3.1415 * (raio*raio)
    return areaCirculo
};

console.log("1 - Retangulo \n2 - Triangulo \n3 - Circulo \n4 - Sair ");

let opcao= ds.questionInt('Digite qual opção deseja usar:');

while (opcao<=4) {


    switch (opcao) {
        case 1: 
            let larguraretangulo=ds.questionInt("Digite a largura do retangulo:");
            let alturaretangulo=ds.questionInt("Digite a altura do retangulo:");
            var arearetangulo= areaRetangulo(larguraretangulo, alturaretangulo);
            console.log(`Area do Retangulo: ${arearetangulo}`);
            break;
        case 2:
            let baseTri=ds.questionInt("Digite a base do triangulo:");
            let alturaTri=ds.questionInt("Digite a altura do triangulo:");
            var areatriangulo = areaTriangulo(baseTri, alturaTri);
            console.log(`Area do Triangulo: ${areatriangulo}`);
            break
        case 3:
            let raio=ds.questionInt("Digite o raio do circulo:");
            var areacirculo= areaCirculo(raio);
            console.log(`Area do Circulo: ${areacirculo}`);
            break
        case 4:
            console.log("encerrando programa");
            break
    

    };

};