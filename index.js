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
const INTERVALO = 30000; // 30 segundos en milisegundos

function escribirNombre(NOMBRE, index) {
    if (index < NOMBRE.length) {
        CONTENEDOR_NOMBRE.innerHTML += NOMBRE.charAt(index);
        index++;
        setTimeout(() => escribirNombre(NOMBRE, index), 100); // Cambia el tiempo de retraso aquí (en milisegundos)
    }
}
function escribirCargo(CARGO, index) {
    if (index < CARGO.length) {
        CONTENEDOR_CARGO.innerHTML += CARGO.charAt(index);
        index++;
        setTimeout(() => escribirCargo(CARGO, index), 100); // Cambia el tiempo de retraso aquí (en milisegundos)
    }
}
function reiniciarEscritura() {
    CONTENEDOR_NOMBRE.innerHTML = "";
    CONTENEDOR_CARGO.innerHTML = "";
    escribirNombre(NOMBRE, 0);
    setTimeout(() => escribirCargo(CARGO, 0), NOMBRE.length * 100); // Comienza a escribir el cargo después de terminar el nombre
}
setInterval(reiniciarEscritura, INTERVALO); // Iniciar la escritura cada 30 segundos
reiniciarEscritura(); // Primera ejecución al cargar la página
