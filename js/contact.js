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
