let presionar = document.getElementById("presionar")
let seccion = document.getElementById("etiqueta")
let color = document.getElementById("color")
let traerI= document.getElementById("traer_info")

presionar.addEventListener("click", insertarTexto)
color.addEventListener("click", cambiarColor)
traerI.addEventListener("click",traerInfo)

function insertarTexto() {
    seccion.innerHTML = "Este texto se agrego con JS"
    console.log("se agregó texto")
}

function cambiarColor() {
    seccion.style.backgroundColor = 'aquamarine';
    console.log("colorCambiado")
}

function traerInfo() {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(data => {console.log(data, "Treae los datos")
        seccion.innerHTML = `<p> ${data[0].title} </p>`
    }) .catch(error => {
        console.error("Error al traer la información:", error);
        seccion.innerHTML = `<p>Error al traer la información</p>`;
    });
}