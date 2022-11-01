let catalogo = document.getElementById('catalogo');
let definirClase
let jug;

camisetas.sort((a,b) => a.posicion - b.posicion)

let armadoCatalogo = (productos) => {
    for(prod of productos){
        jugador = prod.jugador.toUpperCase()
        prod.titulo.includes('camiseta') ? jug = 'Jugador: ' : jug = '';
        prod.detalle == 'seleccion argentina' && (definirClase = 'argentina')
        prod.detalle == 'cleveland cavaliers' && (definirClase = 'cleveland')
        prod.detalle == 'boston celtics' && (definirClase = 'boston')
        prod.detalle == 'chicago bulls' && (definirClase = 'bulls')
        prod.detalle == 'san antonio spurs' && (definirClase = 'spurs')
        prod.detalle == 'seleccion estados unidos' && (definirClase = 'eeuu')
        prod.detalle == 'los simpsons' && (definirClase = 'simpsons')
        catalogo.innerHTML += `
        <div class="card ${definirClase}" id="tarjeta">
        <h2>${prod.titulo}</h2>
        <p class="sub">${prod.detalle}</p>
        <img src="${prod.imagen}">
        <p class="descripcion">${prod.descripcion.toUpperCase()}</p>
        <p class="descripcion">${jug}${jugador}</p>
        <p class="descripcion">Talle: ${prod.talle}</p>
        <p class="precio"> $${prod.precio}
        </div>`
    }
}

armadoCatalogo(camisetas)