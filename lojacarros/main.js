$(document).ready(function() {
    $('#caroussel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
});