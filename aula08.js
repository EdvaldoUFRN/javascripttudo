let n1 = 11, n2 = 14
let res = n1 & n2

console.log(res)
//esse operador bitwise & vai pegar os valores que tiverem equivalência.
//o operador pipe | ele vai retornar 1 quando tiver pelo menos 1, exemplo 1 e 0 = 1.
//tem o operador ou exclusivo ˆ retorna 1 se tiver apenas 1.
//operações de deslocamento de bits.
// bitwise << que desloca os bits para esquerda. n1 >> 1 desloca 1 bit para direita., se quiser mudar
//ainda mais aí a gente pega e coloca a quantidade de bits que deseja deslocar.
//e quando desloca aí ele fica com 0.
//exemplo sempre que eu quiser dobrar o meu valor eu desloco 1 bit para a esquerda.
let n3 =25
res = n3 << 1
console.log(res)
res = n3 >> 1
//deslocou para direita então ele divide pela metade.
console.log(res)
//se botar 2 ele vai multiplicar pelo multiplo etc.