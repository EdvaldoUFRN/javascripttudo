//função anonima ela não é instanciada, ela não está lá na memória.
//ela n precisa de um nome.
//se ela n tem nome a gente precisa associar ela a alguém.
const f = function(v1,v2){
    return v1+v2
}

console.log(f(10,5))

//construtor ou classe, a gente vai precisar do operador new.
//se a gente tiver uma função simples, tipo recebe apenas dois parâmetros, a gente cria uma função construtora.
const a = new Function("v1","v2","return v1+v2")//função construtor anonima.

console.log(a(10,45,5))