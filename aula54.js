//coleção map.
//não é a mesma coisa que a função map.
//ele é um do tipo chave valor.

let mapa=new Map() //já salvei na memória com esse new.
mapa.set("curso","javascript")
mapa.set(10,"CFB Cursos")
mapa.set(1,220)
//eu não posso ter chaves iguais, se não ele vai substituir aquele valor.
//os valores são referenciados pelas chaves.
//has existe ?
//keys as chaves, values é os valores.
//cada elemento do map é um conjunto onde tem a chave e o valor.

console.log(mapa.get(1))
//get é usado para pegar o valor da chave.

console.log(mapa.has("curso"))
mapa.delete(0)//usado para remover.

mapa.forEach((el)=>{//usado para percorrer a array.
    console.log(el)
})