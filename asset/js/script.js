//toggle
const navbarNav = document.querySelector(".navbar-nav");
const searchGroup = document.querySelector(".search-group");
const cartItems = document.querySelector("#cart-items");

const menuToggle = document.querySelector("#humburger-menu");
const toggleSearch = document.querySelector("#search");
const cartToggle = document.querySelector("#shoping");

const isScrolling = () => {
    const nav = document.querySelector("nav");
    let windowPosition = window.scrollY > 250;
    nav.classList.toggle(".active", windowPosition);
};
window.addEventListener("scroll", isScrolling);

//tampilkan side naav
menuToggle.onclick = () => {
    navbarNav.classList.toggle("active");
    searchGroup.classList.remove("active");
    cartItems.classList.remove("active");
};

// tampilkan search input
toggleSearch.onclick = () => {
    searchGroup.classList.toggle("active");
    cartItems.classList.remove("active");
    navbarNav.classList.remove("active");
};

//tampilkan cart items
cartToggle.onclick = () => {
    cartItems.classList.toggle("active");
    searchGroup.classList.remove("active");
    navbarNav.classList.remove("active");
};

window.onscroll = () => {
    searchGroup.classList.remove("active");
    navbarNav.classList.remove("active");
    cartItems.classList.remove("active");
};

//hilangkan side nav,cart shop, input search
document.addEventListener("click", function (e) {
    //side nav
    if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

    //search group
    if (!toggleSearch.contains(e.target) && !searchGroup.contains(e.target)) {
        searchGroup.classList.remove("active");
    }

    //cart items
    if (!cartToggle.contains(e.target) && !cartItems.contains(e.target)) {
        cartItems.classList.remove("active");
    }
});
