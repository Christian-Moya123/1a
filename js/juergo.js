let conteo = 0;
let puntaje = 0;

function opcionCorecta(id) {

    conteo = conteo + 1

    if (id === "keldeo") {

        if (conteo === 1) {
            puntaje = 5

        } else if (conteo === 2) {
            puntaje = 3

        } else {
            puntaje = 1
        }

        document.getElementById("respuesta").innerHTML = "<h1>Respuesta Corresta</h1>"
        document.getElementById("idinicio").innerHTML = "<h1 class='amarillo'>Respuesta Corresta</h1>"
        document.getElementById("idpuntaje").innerHTML = "Puntaje>" + puntaje
        document.getElementById("idconteo").innerHTML = "Conteo>" + conteo
        cambiarImagen()

    } else {
        if (conteo === 3) {
            reiniciar()

        } else {


            document.getElementById("respuesta").innerHTML = "<h1 >Respuesta InCorresta</h1>"
            document.getElementById("idinicio").innerHTML = "<h1 class='rojo'>Respuesta Corresta</h1>"
            document.getElementById("idpuntaje").innerHTML = "Puntaje>" + puntaje
            document.getElementById("idconteo").innerHTML = "Conteo>" + conteo
        }
    }
}

function reiniciar() {
    document.getElementById("respuesta").innerHTML = "<h1></h1>"
    document.getElementById("idinicio").innerHTML = "<h1 class='negro'>Respuesta Corresta</h1>"

    conteo = 0;
    puntaje = 0;

    document.getElementById("idpuntaje").innerHTML = "Puntaje>" + puntaje
    document.getElementById("idconteo").innerHTML = "Conteo>" + conteo
    document.getElementById("idimagen").src = "./img/nose.jpg"
}

function cambiarImagen() {
    document.getElementById("idimagen").src = "./img/eslorac.jpg"
}