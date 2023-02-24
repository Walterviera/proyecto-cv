
// Obtener el botón y el contenido
var boton = document.getElementById("boton");
var contenido = document.getElementById("contenido");

// Agregar un evento de escucha de clics al botón
boton.addEventListener("click", function() {
  if (contenido.style.display === "none") {
    // Si el contenido está oculto, mostrarlo
    contenido.style.display = "block";
  } else {
    // Si el contenido está visible, ocultarlo
    contenido.style.display = "none";
  }
});


