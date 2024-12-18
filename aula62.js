//objetos literais.
//objetos literais não tem independentes.
// todos apontam para o mesmo objeto, endereço de memória.
//vão apontar para uma mesma memória.
const Pessoa = {
    nome: "Bruno",
    getNome: function () {
        return this.nome
    },
    setNome: function (nome) {
        this.nome = nome
    }
}
const p2 = Pessoa
const p3 = Pessoa
console.log(Pessoa.nome)
//todos recebem a mesma coisa.
//mesmo tem instancias diferentes.
p2["nome"] = "Melda."
p3.nome = "Kleuds."
console.log(p2.getNome())