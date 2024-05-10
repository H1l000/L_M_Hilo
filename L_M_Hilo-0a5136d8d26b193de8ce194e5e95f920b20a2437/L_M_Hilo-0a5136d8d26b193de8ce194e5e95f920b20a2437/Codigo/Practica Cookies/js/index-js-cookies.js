/* Script de la página o sección de las cookies de la página principal */
document.addEventListener("DOMContentLoaded", function() {
    var popupCookies = document.getElementById("popupCookies");
    var formularioCookies = document.getElementById("formulario-cookies");

    /* Primero, verificar que el usuario visitante de la página principal 
    acepta las cookies que se muestran al iniciar la página */
    if(!aceptarCookies()){
        mostrarAvisoRechazo();
    }

    /* Esta función es la que muestra las cookies 
    al usuario nada mas entrar a la página principal */
    function mostrarAvisoCookies() {
        popupCookies.style.display = "block";
    }

    /* Esconder el bloque de las cookies una vez son 
    aceptadas por el usuario visitante de la página principal */ 
    function aceptarCookies(event){
        event.preventDefault();
        popupCookies.style.dislpay = "none";
        almacenarResultadoCookies();
    }

    /* función que verifica si el usuario ya ha aceptado las cookies */
    function cookiesAceptadas(){
        return localStorage.getItem("cookiesAceptadas") === "true";
    } 

    /* Función contenedor de las preferencias del 
    usuario visitante de la página principal */
    function contenedorCookies(){
        var checkboxes = formularioCookies.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox){
            localStorage.setItem(checkbox.name, "true");
        })
    }

    /* Evento que envia las cookies seleccionadas una vez se presiona el botón "Aceptar las cookies seleccionadas" */
    formularioCookies.addEventListener("submit", aceptarCookies);
    
    /* Función que oculta el bloque de las cookies cuando son aceptadas */
    if(cookiesAceptadas()){
        popupCookies.style.display = "none";
    }
})