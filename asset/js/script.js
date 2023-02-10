//toggle
const navbarNav = document.querySelector(".navbar-nav");
const menuToggle = document.querySelector("#humburger-menu");
//tampilkan side naav
menuToggle.onclick = () => {
    navbarNav.classList.toggle("active");
};
//hilangkan side nav
document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});
