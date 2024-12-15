//template strings, facilidade em tratar strings.

const curso = "Javascript"
const canal = "CFB cursos"
//const frase = "Este é o curso de " + curso + " do canal " + canal

//tem que ir concatenando etc... pode ter erros etc.
//tem como por até a quebra de linha etc.
//vou delimitar a string com crase.

const frase = `Este é o 
curso de ${curso}
 do canal ${canal} `
//eu posso quebrar linha também com \n quebra no console
//o <br/> quebra a linha no DOM.
//eu posso dar o enter para poder dar as quebras de linhas.
console.log(frase)
