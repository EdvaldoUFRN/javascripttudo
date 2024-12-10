//se eu quiser entrar com valores para dentro da função e operar eles.
//tem como por valores padrões
const VALOR_PADRAO=0
function soma(p1=VALOR_PADRAO,p2=VALOR_PADRAO) {
    console.log(p1+p2)
}

soma("bruno")//js tem um cast automático então dá para eu passar esse valor.
soma(2022)
soma(5.2)
soma(2,2)
//tem como passar mais de um parâmetro

function sub(p1,p2){
    console.log(p1-p2)
}

sub(10,4)