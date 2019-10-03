const burgerMenu = document.querySelector("#burger-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const blockSign = document.querySelector(".sign");
const toggleSearch = document.querySelector("#togle-search");

function signHiden() {
    blockSign.classList.toggle("sign_hiden");
    document.querySelector("#search").focus();
}

function toggleMenu() {
    mobileMenu.classList.toggle("mobile-menu_active");
}

toggleSearch.addEventListener("change", signHiden);
burgerMenu.addEventListener("click", toggleMenu);
