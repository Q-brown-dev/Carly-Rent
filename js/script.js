// Mobile menu toggle & simple interactions
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('sideMenu');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active-For-Menu');
        // simple accessible toggle
        menuBtn.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
        setTimeout(() => {
            nav.classList.remove("open")

        }, 900)
    });
}



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

// Footer for media

const dropDown1 = document.querySelector(".drop-down");
const dropdownMenu1 = document.querySelector(".drop-down-menu");
dropDown1.addEventListener("click", () => {
    dropDown1.classList.toggle("active-hover");
})

const dropDown2 = document.querySelector(".drop-down2");
const dropdownMenu2 = document.querySelector(".drop-down-menu2");
dropDown2.addEventListener("click", () => {
    dropDown2.classList.toggle("active-hover");
})

const dropDown3 = document.querySelector(".drop-down3");
const dropdownMenu3 = document.querySelector(".drop-down-menu3");
dropDown3.addEventListener("click", () => {
    dropDown3.classList.toggle("active-hover");
})

