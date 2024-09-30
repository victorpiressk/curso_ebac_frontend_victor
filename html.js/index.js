const formulario = document.getElementById('formulario');
const messageDiv = document.getElementById('message');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        messageDiv.textContent = "O formulário é válido! O número B é maior que o número A.";
        messageDiv.className = "message success";
    } else {
        messageDiv.textContent = "O formulário é inválido! O número B deve ser maior que o número A.";
        messageDiv.className = "message error";
    }

    messageDiv.style.display = 'block';
});