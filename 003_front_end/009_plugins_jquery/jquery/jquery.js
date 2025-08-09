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
            valorVeiculo: {
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
            valorVeiculo: 'Este campo é obrigatório.',
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
    
    $('.lista-veiculos button').on('click', function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()
        const valorVeiculo = $(this).parent().find('strong').text()

        $('#veiculo-interesse').val(nomeVeiculo)
        $('#valor-veiculo').val(valorVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})