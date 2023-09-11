// Detecta el scroll de la página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {

        document.getElementById("arribaBtn").style.display = "block";
    } else {
        
        document.getElementById("arribaBtn").style.display = "none";
    }
}

// Cuando se hace clic en el boton vuelve a la parte de arriba de la página
document.getElementById("arribaBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para otros navegadores
});


var boton = document.getElementById("boton-ig");

boton.addEventListener("click", function() {

    var url = "https://www.instagram.com/franco_art21/?theme=dark";

    window.open(url, "_blank");
});



