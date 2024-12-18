//objetos literais
//conversão
//json em objeto e objeto em json.
//quando for transferir para uma api, transformar em json.
//e quando receber da api vai estar json, aí a gente transforma em objeto.

const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos",
    aulas: {
        aula01: "intro",
        aula02: "varia",
        aula03: "func",

    }
}

const stringe = '{"nome":"Bruno","canal":"CFB Cursos","aulas":{"aula01":"intro","aula02":"varia","aula03":"func"}}'
const s_json_pessoa = JSON.stringify(pessoa) //converter o objeto literal em uma string json.
const o_json_pessoa = JSON.parse(stringe) //converte json em objeto.
console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)