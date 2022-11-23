let catalogo = document.getElementById('catalogo');
let tlS = document.getElementById('tlS')
let tlM = document.getElementById('tlM')
let tlL = document.getElementById('tlL')
let tlXL = document.getElementById('tlXL')
let tlXXL = document.getElementById('tlXXL')
let tlTodos = document.getElementById('tlTodos')
let definirClase
let jug;

camisetas.sort((a,b) => a.posicion - b.posicion)

let makeCard = (productos) =>{
    catalogo.innerHTML = '';
    for(prod of productos){
        jugador = prod.jugador.toUpperCase()
        prod.titulo.includes('camiseta') ? jug = 'Jugador: ' : jug = '';
        catalogo.innerHTML += `
        <div class="card">
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

let catalogueando = (productos, prodSize) => {
    if(prodSize == 'all'){
        makeCard(productos)
    }else{
        productos = productos.filter(p => p.talle == prodSize)
        makeCard(productos)
        console.log(prodSize)
    }

}

catalogueando(camisetas,'all')
tlS.addEventListener('click', () => catalogueando(camisetas, 'S'))
tlM.addEventListener('click', () => catalogueando(camisetas, 'M'))
tlL.addEventListener('click', () => catalogueando(camisetas, 'L'))
tlXL.addEventListener('click', () => catalogueando(camisetas, 'XL'))
tlXXL.addEventListener('click', () => catalogueando(camisetas, 'XXL'))
tlTodos.addEventListener('click', () => catalogueando(camisetas, 'all'))