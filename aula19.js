//break encerra, para o loop
//continue, ele continua dentro do loop
let n=0, max = 1000

while (n<max) {
    console.log("CBF" + n)
    if (n>10) {
        break//vai sempre vir dentro de uma condição.
        //continue ele não continua a contagem, ele volta de novo o loop, a próxima iteração.
    }
    n++
}

console.log("Fim")