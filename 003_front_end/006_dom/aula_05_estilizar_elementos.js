const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.splice(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Valor de: <b>R$${valorDeposito.value}<b> foi depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b> com sucesso!`;

    formValido = validaNome(nomeBeneficiario.value)
    if (formValido) {
        //Adicionar mensagem de sucesso no html
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        //Acessar estilo css pelo JS (Display none para Diplay block)
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        //Adicionar mensagem de erro no html
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'block';
    }
})