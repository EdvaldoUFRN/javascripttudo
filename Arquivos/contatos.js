import { contatos } from "./bancoContatos.js";

let contato = {
    //colocamos tudo que é necessário para conseguirmos
    //fazer uso.
    getTodosContatos: function () {
        return contatos
    },
    getContato: function (i_cont) {
        return contatos[i_cont]
    },
    addContato: function (novoContato, destinoDOM) {
        contatos.push(novoContato)
        //push no banco de dados.
        destinoDOM.innerHTML = ""
        contatos.forEach((c) => {

            const div = document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome = document.createElement("p")
            p_nome.innerHTML = c.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = c.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)
        })
        console.log(contato.getTodosContatos())
        //precisamos definir um padrão para o contato.
        //nome, etc.
        //passar aonde ela vai inserir no dom.
    }
}//objeto literal.

export default contato