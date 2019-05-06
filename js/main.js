$(document).ready(function () {
    $('.menu__btn').click(function () {
        $('.menu').slideToggle();
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).text('закрити меню').append("<span></span>");
        } else {
            $(this).text('меню').append("<span></span>");
        }
    });

    // fixed plugin
    let offsetTop = $('#plugin').offset().top;
    let heightIcon = $('#plugin').height();
    console.log(offsetTop)
    $(window).scroll(function () {
        let currentPosition = $(window).scrollTop();
        if (currentPosition >= offsetTop + heightIcon) {
            $('#plugin').addClass('fixed');
        } else {
            $('#plugin').removeClass('fixed');
        }
    });

    $('.search__btn').click(function () {
        $(this).prev().toggleClass('open')
    });

    // max length title video
    let maxLength = 80;
    let ellipsestext = "...";
    $('.video-block__card_title').each(function () {
        let content = $(this).html();
        if (content.length > maxLength) {
            let c = content.substr(0, maxLength);
            let h = content.substr(maxLength - 1, content.length - maxLength);
            let html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span>';
            $(this).html(html);
        }
    });

});
