// Obtén el elemento del menú
var menu = document.querySelector('.nav');

// Obtiene la posición inicial del menú
var menuPosition = menu.offsetTop;

// Agrega un listener para el evento de scroll
window.addEventListener('scroll', function() {
    // Verifica si la posición actual del scroll es mayor que la posición original del menú
    if (window.pageYOffset > menuPosition) {
        // Si es así, agrega la clase 'sticky' al menú
        menu.classList.add('sticky');
    } else {
        // Si no, remueve la clase 'sticky'
        menu.classList.remove('sticky');
    }
});