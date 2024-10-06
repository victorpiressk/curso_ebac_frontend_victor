$(document).ready(function() {
    $('#corpo-form').on('submit', function(e) {
        e.preventDefaut();

        let listaTarefa = $('#adicionar-tarefa').val();
        console.log(listaTarefa)
        $('#corpo-lista').append(`<li>${listaTarefa}</li>`);
        $('#adicionar-tarefa').val('');
    })
    
    $('#adicionar-tarefa').on('click', 'li', function() {
        $(listaTarefa).toggleClass('completed');
    })
})
