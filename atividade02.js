let apartamento = {
    quartos : 2, 
    tipo : "Apartamento",
    endereco : "Avenida Principal, 456 - Centro",
    andar:"7",
    casa : function () {
        console.log (`${this.tipo} com ${this.quartos} quartos, localizado no ${this.andar}° andar da ${this.endereco}.`)
    },
};
apartamento.casa();

console.log('------------------------');

let produtoEmbalado = {
    nome : "Laptop HP",
    categoria : "Eletrônicos",
    peso : 1.5,
    preco : "3500.00",
    produto : (`O produto ${this.nome}, da categoria ${this.categoria}, pesando ${this.peso}kg, está à venda por R$ ${this.preco}. `),
};
produtoEmbalado.produto();

console.log('------------------------');

class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.tipo} com ${this.quartos} quartos, localizado na ${this.endereco}.`;
    }
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
console.log(casa.exibirInformacoes());

const ap = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
console.log(ap.exibirInformacoes());

console.log('------------------------');

class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `Veículo: \n\tMarca: ${this.marca}\n\tModelo: ${this.modelo}\n\tAno: ${this.ano}`;
    }
}
const carro = new Veiculo("Toyota", "Corolla", 2022);
console.log(carro.exibirDetalhes());
const moto = new Veiculo("Honda", "CBR 600RR", 2021);
console.log(moto.exibirDetalhes());