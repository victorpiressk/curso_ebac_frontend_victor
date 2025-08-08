// Recuperar elementos pelo nome da tag
document.getElementsByTagName('input')

// Adicionar a recuperação dos elementos em uma variavel para manipulação
let inputs = document.getElementsByTagName('input')
inputs[1]

// Recuperar elementos pelo seu id
document.getElementById('nome-beneficiario')
document.getElementById('btn-depositar')

// Cadeia de seleção de elementos
document.getElementsByTagName('form')[0].getElementsByTagName('button')

// Recuperar elemento pela sua classe
document.getElementsByClassName('container')

// O querySelector é uma forma mais avançada de selecionar elementos
// Constroi um seletor mais complexo (busca o elemento de forma mais dinâmica)
// Obs: Irá selecionar o primeiro item da elemento escolhido

// Seleciona pelo tipo
document.querySelector('input[type=number]')

// Seleciona pelo id
document.querySelector('input#numero-conta')

// Selecionar todos os elementos correspondentes ao tipo da consulta
document.querySelectorAll('input[type=number]')