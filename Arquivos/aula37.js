//entendendo a relação dos elementos no dom
//parent node, elemento pai.
//relação de chield é quando um é filho do outro.
//siblings, são elementos irmãos.
//childnodes, ele considera até os texts
//children ele retorna apenas elementos html.
//tem como a gente ver as coisas que dá para fazer em um elemento,
//indo em propriedades.
//tudo que é propriedade não precisa do parenteses

const caixa1= document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
console.log(caixa1.children)//retorna um array.
//para pegar o nó raiz.

console.log(document.getRootNode())
console.log(btn_c[0].ownerDocument)
//continua sendo o document o documento raiz.