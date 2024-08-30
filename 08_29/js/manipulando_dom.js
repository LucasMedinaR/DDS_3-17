'use strict'

let html = document.getElementById('saudacao');

console.log(html)

//DOM (document objetc model) e a estrutura da pagina HTML.
//o DOM permite que linguagens interajam com a pagina

html.innerHTML='<h1>Olá mundo</h1>';

let alunos = [
    { nome: 'Lucaas', sobrenome: 'Medina'},
    { nome: 'Lucass', sobrenome: 'Ramos'},
    { nome: 'Lucassss', sobrenome: 'Medina Ramos'}
]
let tabela = document.getElementById('tabela');

let exibir = '';
for(let aluno of alunos){
    tabela += '<tr>'
    tabela += '<td>'+aluno.nome+'</td>'
    tabela += '<td>'+aluno.sobrenome+'</td>'
    tabela += '/tr>'
}

tabela.innerHTML += exibir;

console.log(tabela);