let progreso = document.querySelector(".progreso"); //Guardamos los elementos dentro de una variable
let porcentaje = document.querySelector(".porcentaje"); //Guardamos los elementos dentro de una variable
let celebracion = document.querySelector("body"); //Guardamos los elementos dentro de una variable

let avance = 0; //Variable para tener el avance de la barra del progreso

let tiempo=setInterval(() => { //Un bloque de codigo que se ejecutara repetidas veces
    avance += 1; //Aumenta el avance
    progreso.style.width = `${avance}%`; //Alteramos el ancho, asi aumentando el progreso

    if (avance == 100) { //Cuando el avance llegue a 100
        clearInterval(tiempo); //Acabamos con el bucle y el avance
        celebracion.classList.add("celebracion"); //Añadimos el estilo de celebracion
    }

    porcentaje.textContent = `${avance}%`; // Para que el contenido mostrado del porcentaje vaya aumentado
}, 75); //Se ejecutara cada 75 milisegundos

