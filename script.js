var menu = function() {
    var isMenuOpen = false;
    $('.menu-button').click(function() {
        if (isMenuOpen === false) {
            $('nav').stop();
            $('nav').animate({
                left: '6vw'
            }, 200);
            $('.menu-button').animate({
                transform: 'rotate(90deg)'
            }, 200);
            $('.menu-cover').animate({
                bottom: '0'
            }, 150);

            isMenuOpen = true;
        }
        else {
            $('nav').stop();
            $('nav').animate({
                left: '100vw'
            }, 200);
            $('.menu-button').animate({
                left: '15px'
            }, 200);
            $('.menu-cover').animate({
                bottom: '100vh'
            }, 150);

            isMenuOpen = false;
        }
    });
};

addEventListener('load', menu);
