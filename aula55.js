//falaremos do set.
//ela não pega valores iguais.
//coleção set.
//não permite entradas duplicadas.
//é igual o array mas n recebe duplicadas.

//também usa o new.

let musicas=new Set(["musica1","musica boa","musica10"])

console.log(musicas)
//add adiciona elemento.

musicas.add("musica muito legal")
musicas.add("add")
musicas.add("add")
musicas.add("add")
musicas.add("add")
console.log(musicas)
musicas.delete("musica1")
musicas.clear()//limpar tudo igual o map.
//quando eu não puder ter entradas duplicadas aí eu uso o set.
musicas.forEach((el)=>{
    console.log(el)
})

//podemos usar também o for of.