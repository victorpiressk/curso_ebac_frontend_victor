// Recuperar atibutos de um campo de nome
let nomeBeneficiario = document.getElementById('nome-beneficiario')

// Atribuir um valor ao elemento
nomeBeneficiario.value = 'Victor Pires'

// Retornar tipo do elemento
nomeBeneficiario.type

// Retornar o id do elemento
nomeBeneficiario.id

// Verificar se campo é obrigatório
nomeBeneficiario.required

// Acessa o placeholder do campo 
nomeBeneficiario.placeholder




// Criar uma validação customizada no campo nome
// utilizar recurso de strings split(' ') -> Cria um array
nomeBeneficiario.value.split(' ')

// Identificar a quantidade de valores do array
nomeBeneficiario.value.split(' ').length

// Criar uma regra boleana
nomeBeneficiario.value.split(' ').length < 3

// Criar uma condicional
let botaoDepositar = document.getElementById('botao-depositar')
botaoDepositar.disabled = nomeBeneficiario.value.split(' ').length < 3




// Recuperar atibutos de um campo de valores
let valorDeposito = document.getElementById('valor-deposito')

// Atribuir um valor ao elemento
// Obs: Não será possível adicionar string em um campo do tipo number
nomeBeneficiario.value = 1000