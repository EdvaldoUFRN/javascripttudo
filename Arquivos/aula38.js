//comando para ver se possui filhos ou não.
const caixa1=document.getElementById("caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())
//vai retornar true se possuir filhos e false se não.

console.log(caixa1.children.length>0?"Possui filhos":"Não possui filhos")

console.log(caixa1.firstElementChild.innerHTML="teste")

console.log(btn_c[0].parentElement.parentElement)//retorna o elemento anterior, tipo o pai dele.
//também tem o parentNode que faz o mesmo, aí se a gente quiser pegar o avo dele, parentNode.parentNode.
