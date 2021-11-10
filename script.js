//OBTENGO EL BODY Y EL CONTENEDOR DE LAS ESTRELLAS
const contenedorEstrellas = document.getElementById("contenedor-estrellas")
const body = document.getElementsByTagName("body")

//VARIABLES PARA EL TAMAÑO DE LAS ESTRELLAS
const tamañoMin = 3
const tamañoMax = 6

const cantidadEstrellas = 250 //CANTIDAD DE ESTRELLAS

//EL ANCHO EN EL QUE PUEDEN APARECER LAS ESTRELLAS LA CUAL ES IGUAL AL ANCHO DEL BODY
let distanciaMaxX = body[0].offsetWidth - 35

// const distanciaMaxX = 1850 
// const distanciaMaxY = contenedorEstrellas.offsetHeight

const colores = ['ffba08', '48bfe3', 'a8dadc', 'fdf0d5', 'edf2f4', 'ffb3c1', '00f5d4', 'cbf3f0']


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarEstrella() {

    let tamaño = getRndInteger(tamañoMin, tamañoMax).toString()
    let color = "ffffff"

    let x = getRndInteger(0, distanciaMaxX)
    // let y = getRndInteger(0,distanciaMaxY)

    let brillo = ""

    //SE DEFINE POR PROBABILIDAD EL TIPO DE BRILLO
    if (getRndInteger(0, 4) == 1) {
        brillo = 'brillo1'
    } else if (getRndInteger(0, 4) == 1) {
        brillo = 'brillo2'
    }

    let numeroRandomColor = getRndInteger(0, 31)

    //SE DEFINE POR PROBABILIDAD EL COLOR
    // if (numeroRandomColor == 0) {
    //     color = colores[0]
    // } else if (numeroRandomColor == 2) {
    //     color = colores[1]
    // }

    if (numeroRandomColor < colores.length) {
        color = colores[numeroRandomColor]
    }

    // document.write("<div class = 'estrella "+ brillo +"' style =\"background-color:#" + color + "; width:"+ tamaño +"px; height:"+ tamaño+ "px; position:relative;top:"+ "0" +"px;left:"+ x +"px\"></div>");
    // document.write("<div class = 'estrella "+ brillo +"' style =\"background-color:#" + color + "; width:"+ tamaño +"px; height:"+ tamaño+ "px; position:relative;left:"+ x +"px\"></div>");
    // contenedorEstrellas.innerHTML("<div class = 'estrella "+ brillo +"' style =\"background-color:#" + color + "; width:"+ tamaño +"px; height:"+ tamaño+ "px; position:relative;left:"+ x +"px\"></div>");

    let estrella = document.createElement("div")
    estrella.className = "estrella " + brillo
    estrella.style = "background-color:#" + color + "; width:" + tamaño + "px; height:" + tamaño + "px; position:relative;left:" + x + "px"

    contenedorEstrellas.appendChild(estrella);

}

let contadorEstrellas = 0

while (contadorEstrellas < cantidadEstrellas) {
    generarEstrella()
    contadorEstrellas += 1
}

