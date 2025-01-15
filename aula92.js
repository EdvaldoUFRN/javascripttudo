import * as cu from './aula92-module.js'
cu.default()
//modulos
//Reaproveitamento de codigo
//organização e reaproveitação de codigo
//posso utilizar os modulos em outros codigos
//tipo eu faria uma importação do modulo.

//normalmente os arquivos javascript eles vem no modo extrict
//quando eu estiver no arquivo que eu quero usar para esportar, eu irei usar o export.
//por exemplo o arquivo aula92-module.js
console.log("servidor rodando")
cu.getTodosCursos()
//aqui eu vou ensinar como importar com renomeação da importação.
//por exemplo
//import {cursos as c, getTodosCursos as gc} from './aula92-module.js'
//ele vai usar o cursos como se fosse c.
//a gente pode renomear todo o modulo.