// para que el navbar se cierre al apretar alguna opcion
function cerrarNavbar() {
    const NAVBAR = document.querySelector('.navbar-collapse');
    if (NAVBAR.classList.contains('show')) {
        NAVBAR.classList.remove('show');
    }
}
function toggleNavbar() {
    const NAVBAR = document.querySelector('.navbar-collapse');
    NAVBAR.classList.toggle('show');
}