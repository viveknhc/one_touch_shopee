var swiper = new Swiper(".homeSwiper", {
    effect: "fade",
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".productSwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 6,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30
        }
    }
});