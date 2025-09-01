// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById('cep').value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json/`

//         xhttp.open('GET', endpoint)
//         xhttp.send()
//     })
// })

$(document).ready(function() {
    $('#cep').mask('00000-000')
    
    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json/`
        $(this).find('i').addClass('d-none')
        $(this).find('span').removeClass('d-none')

        // $.ajax(endpoint).done(function(resposta) {
        //     const rua = resposta.logradouro
        //     const bairro = resposta.bairro
        //     const cidade = resposta.localidade
        //     const estado = resposta.uf
        //     const endereco = `${rua}, ${bairro} - ${cidade} - ${estado}`

        //     $('#endereco').val(endereco)

        //     $('#btn-buscar-cep').find('i').removeClass('d-none')
        //     $('#btn-buscar-cep').find('span').addClass('d-none')
        // })

        fetch(endpoint)
        .then(function(resposta) {
            return resposta.json()
        })
        .then(function(json) {
            const rua = json.logradouro
            const bairro = json.bairro
            const cidade = json.localidade
            const estado = json.uf
            const endereco = `${rua}, ${bairro} - ${cidade} - ${estado}`

            $('#endereco').val(endereco)
        })
        .catch(function(error) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.")
        })
        .finally(function() {
            $('#btn-buscar-cep').find('i').removeClass('d-none')
            $('#btn-buscar-cep').find('span').addClass('d-none')
        })
    })

    $('#form-pedido').submit(function(evento) {
        evento.preventDefault()
        
        if ($('#nome').val().length == 0) {
            throw new Error('Digite o nome')
        }
    })
})