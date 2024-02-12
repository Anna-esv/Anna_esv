document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    let slideIndex = 0;

    function showSlide(index) {
        carouselContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        if (slideIndex < carouselSlides.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = carouselSlides.length - 1;
        }
        showSlide(slideIndex);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
});


document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
        // Paramètres de configuration de Swiper
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


