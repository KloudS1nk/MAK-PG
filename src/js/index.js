
$(function () {
    //@prepros-prepend plugin/swiper-bundle.min.js

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, 
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

});
