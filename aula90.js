//objeto literal é uma forma de definir um tipo bem dinamico.
//pode trabalhar como as classes.

const computador = {
    //criar uma propriedade
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info: function () {
        console.log(this.cpu)
    }
}//quando eu associo a uma chave ele já é um objeto.
//se eu quiser eu posso passar ele no innerhtml usando o JSON.stringify
//posso criar também um array de objetos literais.