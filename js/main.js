$(document).ready(function () {
    $('.menu__btn').click(function() {
        $('.menu').slideToggle();
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            $(this).text('закрити меню').append("<span></span>");         
        } else {
            $(this).text('меню').append("<span></span>");
        }
    });

    $('.search__btn').click(function(){
        $(this).prev().toggleClass('open')
    });

});
