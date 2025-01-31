//expressões regulares.
//padrão de caracteres que eu crio, que posso utilizar para funções.
//RegEx
let nome = new String("Bruno pinho Campos 1978")

console.log(nome.search(/pinho/i))//o i quer dizer que ele não vai utilizar case sensitive.

console.log(nome.match(/o/g))//o primeiro o que ele encontrou, como eu colocou o regEx ele vai pegar todos os caracteres o.
//tem como eu colocar mais de um modificador de expressão regular.
console.log(nome.replace(/Pinho/i, "Teste"))
//temos que verificar se a função aceita expressões regulares para que possamos utilizar ela.

//vamos aprender como criar padrões dentro de regex
//a gente tem que colocar dentro de colchetes []

console.log(nome.match(/[oh]/ig)) //é o "o e h"
//a - n esse tracinho significa de a até n.
//| significa também.
console.log(nome.match(/[a-g|0-9]/ig))
//meta caracteres, \d, vai retornar somente o que era digito numerico.
console.log(nome.match(/\d/ig))
//espaços
console.log(nome.match(/\s/ig))
//caracteres alfanumericos DWORDS é tipo do alfabeto.
console.log(nome.match(/\bP/ig))
