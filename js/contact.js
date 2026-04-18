// Contact form fake submit (frontend)

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = document.getElementById('formMsg');
        msg.textContent = 'Sending...';
        setTimeout(() => {
            msg.textContent = 'Thanks — your message was sent (demo).';
            contactForm.reset();
        }, 900);
    });
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

