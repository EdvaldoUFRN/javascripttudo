const caixa1 = document.getElementById("caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
cursos.map((el)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id",("c" + cursos.indexOf(el).toString()))//eu poderia usar o parâmetro chave dentro do map
    //(el,chave).
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const btn_lixeira=document.createElement("img")//aqui eu vou criar uma imagem dentro da div
    //para que quando eu clicar nessa imagem de lixeira, ela apagar a div inteira.
    btn_lixeira.setAttribute("src","./icone_lixeira.png")//aqui eu coloco o atributo src e o valor dele que é onde está.
    btn_lixeira.setAttribute("class","btn_lixeira")//isso daqui é apenas para poder colocar uma class
    //que vai diminuir o tamanho da imagem.
    
    btn_lixeira.addEventListener("click",(evt)=>{
        
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixeira)
    caixa1.appendChild(novoElemento)
})

//quando eu quiser remover um elemento.
