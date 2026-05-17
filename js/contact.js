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



// Back to top btn
const btn = document.getElementById("backToTop");

//Show button when scrlloling down

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        btn.style.display = "block";
    } else {
        btn.style.display = "none"
    }
}


// Scroll to top when clicked
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

