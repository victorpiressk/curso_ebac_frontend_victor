$(document).ready(function() {

    // Forma padrão JS de adicionar evento a um elemento
    document.querySelector('header button').addEventListener('click', function(e) {
        // e.preventDefault()
    })

    // Forma Jquery de adicionar evento a um elemento
    $('header button').click(function() {
        $('form').slideToggle()
    })

    // $('#btn-cancelar').click(function() {
    //     $('form').slideUp()
    // })

    // Segunda forma de adicionar evento a um elemento
    // (Retirar comportamento de atualizar a página ao submeter o formulário)
    $('form').on('submit', function(e) {
        e.preventDefault()

        const enderecoImgNova = $('#endereco-img-nova').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoImgNova}" alt="">`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoImgNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#endereco-img-nova').val('')
        $(novoItem).fadeIn(2000)
    })
})