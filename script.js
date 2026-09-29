let currentSlideIndex = 0;
const slides = document.querySelectorAll('.screenshot');

function changeSlide(direction) {
    slides[currentSlideIndex].classList.remove('active-slide');
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    slides[currentSlideIndex].classList.add('active-slide');
}