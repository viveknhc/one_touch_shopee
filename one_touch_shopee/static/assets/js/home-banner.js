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
  
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    loop: true,


    breakpoints: {

        200: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
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

var swiper = new Swiper(".brandSwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    loop: true,


    breakpoints: {

        200: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        767: {
            slidesPerView: 2,
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