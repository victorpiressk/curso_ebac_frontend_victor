// Criar e analisar arrays
const listaDeMaterias = ['HTML', 'CSS', 'JavaScript']
console.log(listaDeMaterias)
console.log(listaDeMaterias[1])
console.log(listaDeMaterias.length)

// Adicinar itens ao array
listaDeMaterias.push('jQuery')
console.log(listaDeMaterias)
console.log(listaDeMaterias.length)

// Remover itens ao array (array.splice(início, quantidade, item1, item2, ...))
listaDeMaterias.splice(1,1)
console.log(listaDeMaterias)
console.log(listaDeMaterias.length)