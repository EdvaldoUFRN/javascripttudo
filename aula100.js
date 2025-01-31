//aula sobre symbol
const nome = Symbol("nome")

const numero = Symbol("numero")

const corUniforme = Symbol("cor do uniforme")

const Jogador = {
    [nome]: "j1", //posso associar ao symbol, colocando []
    numero: 10, //agora ele fica oculto ao for in

    corUniforme: "amarelo"
}
// ou ainda eu poderia fazer
// Jogador[numero]=10
// Jogador[corUniforme]="amarelo"

for (p in Jogador) {
    console.log(p)
}
console.log(Jogador.nome)
console.log(nome.description)
console.log(Jogador[nome])//ele ganha um certo grau de privacidade.
