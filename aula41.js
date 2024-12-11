//método filter, vai tratar um array, e possibilita fazer um filtragem
//através de um if por exemplo e retornar só alguns elementos que eu queira.
//ele vai criar um novo array.

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((el)=>{//os parâmetros dele são, (valor,indice, array)
    if (el>18) {
        return el
    }
})
console.log(idades)
console.log(maior)