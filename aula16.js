//for in e for of

let num = [10, 20, 30, 40, 50]

for (n in num) {
    console.log(n)


}
//se eu quiser pegar as posições.
for(n in num){
    console.log(num[n])
}
//se eu quiser pegar os elementos.
for (n of num) {
    console.log(n)
}