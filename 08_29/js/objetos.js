'use strict';

//em javaScript um objeto e declarado como chaves{} sua caracteristica e possui chave e valor 
//assim como variaveis as chaves devem seguir um padrao de nomenclatura
let objeto = {
   nome:'Lucas Medina',
   idade: 21,
   cidade:'Vitoria',
   'data de hoje': '29/09/****' //nao se deve declarar uma chace assim mesmo que seja possivel
};

console.log(objeto.nome);
console.log(objeto.cidade);
//console.log(objeto.['data de hoje']);


//JSON Java-script object notations

let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]
//Acessando a primeira posicao  do array e o atributo
console.log(aulas[0].turma);