let slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 5000);

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

function prevSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}


const header = document.getElementById("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.add("active-for-header")
    })
}