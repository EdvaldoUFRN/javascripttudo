//iteradores
const valores = [10, 9, 4, 56, 5]
const it_valores = valores[Symbol.iterator]()

//conseguimos iterar strings.
const texto = "Youtube"
const it_texto = texto[Symbol.iterator]()
console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)

console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)
console.log(it_texto.next().value)

//done : false, quando é falso é porque não chegou no final do array.
//por isso que funções iteradoras conseguem saber.