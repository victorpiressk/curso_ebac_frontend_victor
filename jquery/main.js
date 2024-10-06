$(document).ready(function() {
    $('#corpo-form').on('submit', function(e){
        e.preventDefault();
        
        const itemLista = $('#adicionar-tarefa').val();

        if(itemLista){
            $('#corpo-lista').append(`<li>${itemLista}</li>`);
            $('#adicionar-tarefa').val('');
        }

        $('#corpo-lista').on('click', 'li', function() {
            $('li').toggleClass('completed');
        });
    });
});