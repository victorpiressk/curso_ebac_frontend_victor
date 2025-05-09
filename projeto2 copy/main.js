function adicionarContato() {
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        let tabela = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];
        let novaLinha = tabela.insertRow();
        let celulaNome = novaLinha.insertCell(0);
        let celulaTelefone = novaLinha.insertCell(1);

        celulaNome.innerHTML = nome;
        celulaTelefone.innerHTML = telefone;

        document.getElementById('form-contato').reset();
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
}