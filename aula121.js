//WebStorage, localStorage e SessionStorage, armazenamento diretamente local ou inserção.
//para pegar no navegador e olhar, a gente tem que inspecionar e depois ir em aplicativo.

//todos eles vem de window.
const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt) => {

})

let num = 10
window.localStorage.setItem("numero", num) //como é do window eu não tenho a obrigatoriedade de colocar window, eu posso colocar só localStorage.setItem("numero",num) direto.
//a qualquer momento eu posso mudar o valor dessa chave.
alert(localStorage.getItem("numero"))
//eu posso armazenar qualquer tipo de informação que eu quiser.
alert(localStorage.length) //tamanho do localStorage.
alert(localStorage.key(0))//para dizer qual a chave que está em tal posição.

localStorage.clear() //aqui ele vai limpar tudo aquilo que você colocou dentro do localStorage.

//se você quiser deixar no sessionStorage você vai ter que fazer o seguinte
// sessionStorage.setItem("nome", "Bruno")
// sessionStorage.setItem("canal", "CFB Cursos")
// sessionStorage.setItem("curso", num)

//é tudo a mesma coisa, tanto para sessionStorage quanto para localStorage