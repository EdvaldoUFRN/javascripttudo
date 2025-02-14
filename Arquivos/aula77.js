//vamos aprender Data e hora
const data = new Date()
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("alarme-samsung.mp3")
som_alarme.loop = -1 //loop infinito.

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value * 1000)//é só eu acrescer ou decrescer os milisegundos.
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)//ele me retorna aquela data.
    hora_alarme.innerHTML = "Hora do Alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime = 0;//rebobina o audio.



})

//se eu quiser eu não preciso instanciar o objeto em uma variável.
const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? "0" + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? "0" + segundo : segundo
    const hora_completa = hora + ":" + minuto + ":" + segundo
    div_relogio.innerHTML = hora_completa
    if (alarme_ativado && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

//setInterval é uma função que vai chamar outro a cada tempo especificado.
//exemplo
const intervalo = setInterval(relogio, 1000)
console.log(Date.now())//ele me retorna o timestamp representa o mls, desde uma data antiga.
console.log(Date.now())//ele me retorna o timestamp
/*
getDate()=dia do mes
getDay()= dia da semana(numero)
getFullYear()= Ano com 4 digitos
getHours()=horas
getMilliseconds()=Milisegundos
getMinutes()=Minutos
getMonth()=Mês
getSeconds()=Segundos
getTime()=Timestamp(milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
Date.now()= Timestamp(milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
getTimezoneOffset()=timezone da localidade
setDate()=Define um dia do mês para a data
setMonth()=Define um mês para a data
setFullYear()=Define um ano para a data
setHours()=Define horas
setMinutes()=Define minutos
setSeconds()= Define segundos
setMilliseconds()=Define milisegundos
toDateString()=Retorna somente a data.

*/
// console.log(data.)//se a gente der um ponto vai mostrar todos os métodos que ele pode.

//formatações
let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia
let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes + 1


const data_r = dia + "/" + parseInt(mes + 1) + "/" + data.getFullYear()
div_data.innerHTML = data_r