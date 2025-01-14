const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt) => {
    alert("Olá, como você está ?")
})
btn_confirm.addEventListener("click", (evt) => {
    //? significa que é opcional a colação de parâmetro.
    confirm("Você está aprendendo muito?")//dependendo da resposta ele vai passar o retorno true ou falso.
    //basta q eu coloque numa variável let.
    //posso também colocar ele direto no espaço do if.
})
btn_prompt.addEventListener("click", (evt) => {
//retorna uma string ou undefined.
prompt("Digite seu nome")//a pessoa consegue interceptar o que foi digitado dentro do prompt.

})
