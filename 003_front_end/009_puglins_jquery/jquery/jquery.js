$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true
    },1000)

    $('.menu-hamburguer').click(function() {
        $('#menu-sobre').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Este campo é obrigatório.',
            telefone: 'Este campo é obrigatório.',
            veiculoInteresse: 'Este campo é obrigatório.',
            mensagem: 'Este campo é obrigatório.'
        },
        submitHandler: function(form) {
            alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos sem preenchimento.`)
            }
        }
    })
    
    $('form').on('submit', function() {
        $('#nome').val('')
        $('#email').val('')
        $('#telefone').val('')
        $('#veiculo-interesse').val('')
        $('#mensagem').val('')
    })    
})