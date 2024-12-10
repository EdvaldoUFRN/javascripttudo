//funções geradoras.
//faz-se uso de yield
//ela tem o seu retorno adiado até o momento que a gente precise dele.
//a propria função pode ter o controle dela própria quando quiser.
//eu posso ir retornando coisas ao longo da execução.
//a própria função vai ter o controle sobre ela.
//primeiro a gente vai usar invocar ela em uma variável, vai se chamar iterador.
//quando você coloca o yield ela fala opa é para parar aqui e retornar.

function* cores() {
    yield 'vermelho'
    yield 'azul'
    yield 'amarelo'
}

//o primeiro retorno da função geradora é um iterador que é usado para controlar ela.
const itc = cores()
console.log(itc.next().value)//chama a próxima execução da função.
console.log(itc.next().value)//retorna de onde parou.
console.log(itc.next().value)

//dá para fazer com perguntas.
function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const esporte=yield 'Qual o seu esporte favorito?'
    return "Seu nome é " + nome+', seu esporte favorito é ' + esporte
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)

//posso também jogar dentro de um looop, obtendo retornos da função geradora.
function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

const ite=contador()
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)
console.log(ite.next().value)