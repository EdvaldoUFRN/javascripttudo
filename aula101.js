//funções para trabalhar com strings.
let nome = "bruno"
//ou posso fazer assim
let nme = new String("Bruno")
console.log(nome)
console.log(typeof (nome))
console.log(nme)
console.log(typeof (nme))

console.log(nme.charAt(0))//vai retornar o caracter da posição específica
//charCodeAt, indico a posição e ele vai me retornar o código .
//concatenação, juntar duas strings.

let canal = new String("CFB Cursos")

console.log(nme.concat(canal))//pode concatenar mais de um.
console.log(nme)//ela continua a mesma string, ou seja, o concat é em tempo de execução.
//eu teria que fazer uma nova instancia

console.log(nme.indexOf("no"))//ela vai pegar o indice dentro da string, do valor n, sendo o primeiro.
//caso não exista, então é retornado -1.
console.log(nme.lastIndexOf("o"))//ele vai retornar a posição da última letra.

let nme2 = new String("Bruno")
//para comparar objetos strings, a gente usa o localeCompare()
console.log(nme.localeCompare(nme2)) //se forem iguais ele vai retornar 0, se for igual a 1 a string primeira é maior. se for -1 a outra string é maior que ela.

console.log(nme.replace("B", "P"))//vai procurar aonde tem a letra B e vai substituir por P. ele substitui apenas o primeiro. também funciona com palavras.
console.log(nme.search())//procura a string, e retornar a primeira posição dela.

console.log(nme.slice())//vai cortar uma string de dentro de outra string e retornar ela.

//split() ele vai fazer a divisão quando tiver aquele caracter que ele colocou.
//substring() é até aquela posição, e não considerando a posição que foi colocado.
//substr() posição inicial e até aonde ela termina.
//toUpperCase() deixa tudo em maiúsculo.
//toLowerCase() deixa tudo em minúsculo.
//tem também o toLocaleUpperCase()que faz as mesmas coisas que os de cima.
//normalmente ele imprime o objeto string, se eu quiser só o nome eu coloco.
//nome.valueOf() vai retornar o valor primitivo da string.
//eu posso pegar qualquer valor tipo uma variável e colocar a função .toString() assim eu irei transformar qualquer coisa em uma string.

//startsWith() vai verificar se a nossa string começa com o valor que está dentro do método, retornando true ou falso.
//endsWith() vai verificar se a nossa string termina com o valor que está dentro do método.
//includes() vai verificar se aquela string que eu coloquei dentro do método está dentro da string analisada retornando true ou falso.
//repeat() eu coloco quantas vezes eu quero repetir aquela string.
//e não substitui o valor da string original.
//charCodeAt() vai mostrar os códigos dos caracteres.
//String.fromCodePoint() aí eu coloco o código do caracter que ele vai retornar o caractere.
//console.log(String.fromCodePoint(66,114,117,110,111))

//tem também o template string que é aquele com crases.

let nome_ts = "Bruno"
console.log(`Nome: ${nome_ts}`)