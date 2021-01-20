$(function() {
    "use strict";
    $('.monica__slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.monica__slider_youtube').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // $('#ios-link-1 > a.btn').attr('href', 'ds/zinitevi.html?r=' + new Date().getTime());
    $('a.btn-android').attr('href', $('a.btn-android').attr('href') + '?r=' + new Date().getTime());
    $('#no-revoke-no-jailbreak > a.btn').attr('href', $('#no-revoke-no-jailbreak > a.btn').attr('href') + '?r=' + new Date().getTime());
    // $('#no-revoke-no-jailbreak > a.btn').click(function(e){
    //     e.preventDefault();
    //     $(this).find('i').removeClass('fa-apple').addClass('spinner-border text-light');
    //     var that = this;
    //     $.get("ds/link2.html?r=" + new Date().getTime(), function(data, status){
    //         $(that).find('i').removeClass('spinner-border text-light').addClass('fa-apple');
    //         window.location = data;
    //     });
    //     return false;
    // });

    addToHomescreen();

}); /* End Fn */