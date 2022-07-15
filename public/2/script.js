import {
    arayproductos
} from "./productos.js";

document.getElementById("buscar-pal").addEventListener("keyup", () => {
    actualizarBusqueda()
})



const actualizarBusqueda = () => {
    let busqueda = document.getElementById("buscar-pal").value;
    contenedor.childNodes.forEach(div => {
        if (busqueda == "") {
            div.className = "active";
        } else if (div.childNodes[1] != undefined) {
            let title = div.childNodes[1].innerHTML;
            if (title.toLowerCase().includes(busqueda.toLowerCase())) {
                div.className = "active"

            } else {
                div.className = "";
            }
        }
    })
}






const producto = (nombre, img, href, alt, moneda) => {
    return `
    <div class="active">
        <h3><b>${nombre}</b></h3>
        <img src="${img}" alt="${alt}">
        <a href="${href}">Mas info.</a>
        <h5>Precio: ${moneda}</h5>
        
    </div>
    `
}
const contenedor = document.getElementById('productos');


contenedor.innerHTML = "";

arayproductos.forEach(productoIndividual => {
    contenedor.innerHTML += producto(productoIndividual.nombre, productoIndividual.img, productoIndividual.href, productoIndividual.alt, productoIndividual.moneda)
});