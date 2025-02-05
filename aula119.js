//Validação nativa em javascript.
//vamos usar os próprios do DOM
const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    /*
    let msg = null
    if (!f_nota.checkValidity()) { //retornar a mensagem de validação padrão caso ele não seja satisfeito, consegue interceptar e até mesmo personalizar a mensagem.
       msg = "Campo inválido"
          msg=f_nota.validationMessage //muito bom, ele vai dizer o porque está errado, tipo o que foi desfeito na validação.
     }
          
       f_msg.innerHTML = msg
       evt.preventDefault() //vai evitar o submit.
    */
    //CASO EU QUEIRA PERSONALIZAR AGORA AS MENSAGENS QUE JÁ VEM.
    let estadoValidacao = f_nota.validity
    if (estadoValidacao.valueMissing) {
        f_nota.setCustomValidity("Poxa, este campo é obrigatório")
    }
    f_nota.reportValidity() //aqui ele vai mostrar daquele jeito legal que é uma caixinha de mensagem.
    f_msg.innerHTML = f_nota.validationMessage //se eu quiser colocar lá o texto.
    evt.preventDefault() //vai evitar o submit.
    //E ASSIM POR DIANTE, VOCÊ VAI COLOCANDO OS IF ELSE, ETC...
})

//como aqui eu vou ter apenas um acesso, aí eu fiz apenas um acesso direto.
//se precisar trabalhar com esse elemento várias vezes, é melhor associar ele a uma variável.

/*
Métodos de validação do DOM
checkValidity()
setCustomValidity()

Propriedade de validação do DOM
validity
validationMessage

Propriedades de validação
 <====O CHECKVALIDITY VERIFICA TODAS ESSAS CONSTANTES.====>
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que seu atributo max.
rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for válido.
*/