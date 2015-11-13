$(document).ready(function() {
    $('button').click(function() {
        console.log('tests');
        $(window).scrollTop();
    });
});

$(window).scroll(function() {
    var wScroll = $(window).scrollTop();
    $('.bg').css({
        'transform': 'translate(0,-' + wScroll / 2 + 'px)'
    });
});
