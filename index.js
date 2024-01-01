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

// nombre y cargo se escriba letra por letra
const NOMBRE = "José Pablo Lubiano";
const CONTENEDOR_NOMBRE = document.getElementById("nombre");
const CARGO = "Front-End Developer";
const CONTENEDOR_CARGO = document.getElementById("cargo");

function escribirNombre(NOMBRE, index) {
    if (index < NOMBRE.length) {
        CONTENEDOR_NOMBRE.innerHTML += NOMBRE.charAt(index);
        index++;
        setTimeout(() => escribirNombre(NOMBRE, index), 100); // Cambia el tiempo de retraso aquí (en milisegundos)
    }
}; escribirNombre(NOMBRE, 0);
function escribirCargo(CARGO, index) {
    if (index < CARGO.length) {
        CONTENEDOR_CARGO.innerHTML += CARGO.charAt(index);
        index++;
        setTimeout(() => escribirCargo(CARGO, index), 100); // Cambia el tiempo de retraso aquí (en milisegundos)
    }
}; escribirCargo(CARGO, 0);