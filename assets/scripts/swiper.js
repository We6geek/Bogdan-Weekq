const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    mousewheel: true,
    slidesPerView: 4,
    autoplay: {
        delay: 2500,
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
});

const swiper_second = new Swiper('.swiper_second', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,
    mousewheel: true,
    allowTouchMove: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

