const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt) => {
    // window.location="https://www.google.com.br" 
    //window.location.replace("https://www.google.com.br")
    //assign é semelhante ao replace.
    //o assign não tira a url corrente do histórico, por exemplo, ainda dá para eu voltar a página.
    //replace vai excluir a url corrente do histórico.
    //window.location.reload()//ele recarrega a página.
    // window.history.back()
    // window.history.forward() ele se baseia no histórico do site.
    //o go é para qual página eu quero que ele vá.

    window.location = url.value

})