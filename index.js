function tog() {
    var sidenav = document.getElementsByClassName("side-nav")[0];
    sidenav.classList.toggle("tog")
    if (window.innerWidth <= 768) {
        document.body.classList.toggle("mobile-tog")
    }
    else {
        document.body.classList.toggle("desktop-tog")
    }
}