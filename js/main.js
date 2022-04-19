$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        draggable: false,
        pauseOnFocus: false,
        touchMove: true,
        waitForAnimate: true,
        centerMode: true,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        mobileFirst: false,
    });
});
