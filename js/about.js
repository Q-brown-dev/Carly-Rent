const header = document.getElementById("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.classList.add("active-for-header")
    })
}
