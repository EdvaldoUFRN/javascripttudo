//vou colocar o estilo todo aqui.
//vamos criar uma classe, colocar propriedades que queremos e os métodos, mostrar, ocultar, remover.
//pra tornar ela personalizavel eu vou criar um objeto literal de configuração e passar ele para o construtor da classe.
//assim a gente pode configurar algum elemento para algo.
//não precisa ter o mesmo nome do arquivo.

class Cxmsg {
    titulo = null
    texto = null
    cor = null
    destino = null
    divmsg = null
    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar = () => { // a caixa de mensagens vai ser uma junção de divs.

    }
    ocultar = () => {

    }
}