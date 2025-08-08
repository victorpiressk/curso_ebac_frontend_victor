
// Selecionar elemento formulário
const form = document.getElementById('form-deposito')

//Criar função para validar nome completo
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.splice(' ');
    return nomeComoArray.length >= 2;
}

// Alterar evento de submição do formulário (utilizar atributo addEventListener)
// Primeiro parametro é o nome do evento
// Segundo parametro é a ação que deve acontecer quando o evento for acionado (troca de evento)
// preventDefalut() é uma função que cancela a ação padrão do submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // iniciamos a validação do formulário como falsa 
    let formValido = false;

    // Recuperamos o atibutos do campo de nome
    const nomeBeneficiario = document.getElementById('nome-beneficiario');

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Valor de: R$${valorDeposito.value} foi depositado para o cliente ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value} com sucesso!`;

    // Criamos a condicional para validar fomulário referente ao nome completo
    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        alert(mensagemSucesso);

        // Em caso de sucesso, limpar os campos do formuário sem atualizar a página
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert('O nome não está completo!');
    }
})