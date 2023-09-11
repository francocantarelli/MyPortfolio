// Detecta el scroll de la página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Muestra el boton cuando se ha desplazado 10px desde la parte superior
        document.getElementById("arribaBtn").style.display = "block";
    } else {
        // Oculta el boton si estamos en la parte superior de la página
        document.getElementById("arribaBtn").style.display = "none";
    }
}

// Cuando se hace clic en el boton vuelve a la parte de arriba de la página
document.getElementById("arribaBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
});
