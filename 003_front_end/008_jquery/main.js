$(document).ready(function() {

    // Forma padrão JS de adicionar evento a um elemento
    document.querySelector('header button').addEventListener('click', function(e) {
        // e.preventDefault()
    })

    // Forma Jquery de adicionar evento a um elemento
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp()
    })

    // Segunda forma de adicionar evento a um elemento
    // (Retirar comportamento de atualizar a página ao submeter o formulário)
    $('form').on('submit', function(e) {
        console.log('submit')
        e.preventDefault()
    })
})