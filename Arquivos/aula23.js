//rest eu posso passar uma quantidade de parâmetros que eu não sei.

function soma(...valores) {
    let res = 0
    for (const i of valores) {
        res += i
    }
    return res
}

console.log(soma(1, 3, 5, 6, 7))