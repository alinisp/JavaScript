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