window.onscroll = function() {myFunction()};

const navbar = document.getElementById("top-menu");

const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("main-header__sticky")
    } else {
        navbar.classList.remove("main-header__sticky");
    }
}