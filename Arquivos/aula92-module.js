const cursos = ["Javascript", "HTML"]

const getTodosCursos = () => {
    return cursos
}

const nada = () => {
    console.log("nada")
}
export { cursos, getTodosCursos } //aqui por exemplo eu coloquei o que eu queria exportar no arquivo.
export default nada

//só consigo exportar se estiver aqui.
//também podemos colocar como export padrão
//export default getTodosCursos, ele tem que ficar fora das chaves.


//se eu fizer em uma função por extenso.

// export default function papo(){
//     console.log(papo)
// }