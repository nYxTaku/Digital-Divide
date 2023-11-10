document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: false, // Disable swiping
    });
});

var mybutton = document.getElementById("backToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    // Use smooth scrolling
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
