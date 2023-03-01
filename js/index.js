
const marca = document.querySelector('#marca');
const genero = document.querySelector('#genero');
const color = document.querySelector('#color');
const talla = document.querySelector('#talla');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');

const resultado = document.querySelector('#resultado');

const datosBusqueda= {
    marca:'',
    genero:'',
    color:'',
    talla:'',
    minimo:'',
    maximo:'',
};

document.addEventListener('DOMContentLoaded', () => {
    mostrarZapatillas(zapatillas); // muestra los automóviles al cargar

});

// EventListener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarZapatillas();
})
genero.addEventListener('change', e => {
    datosBusqueda.genero = e.target.value; 

    filtrarZapatillas();
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarZapatillas();
})
talla.addEventListener('change', e => {
    datosBusqueda.talla = parseInt(e.target.value);

    filtrarZapatillas();
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarZapatillas();
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarZapatillas();
})

// FUNCIONES
function mostrarZapatillas(zapatillas) {

    limpiarHTML(); // LIMPIAR HTML PREVIO

    zapatillas.forEach(zapatilla => {
        const {marca, genero, color, talla, precio} = zapatilla;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} - ${color} - Talla: ${talla} - Precio: S/.${precio} - ${genero}
        `;

        // insertar en el html
        resultado.appendChild(autoHTML);
    });
}

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


// funcion que filtra en base a la búsqueda
function filtrarZapatillas() {
    const resultado = zapatillas.filter(filtrarMarca).filter(filtrarGenero).filter(filtrarColor).filter(filtrarTalla).filter(filtrarMinimo).filter(filtrarMaximo)
    console.log(resultado)
    

    if (resultado.length) {
        mostrarZapatillas(resultado);
    }else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = ' No hay Resultados, intenta con otra búsqueda';
    resultado.appendChild(noResultado);
}

function filtrarMarca(zapatilla) {
    const {marca} = datosBusqueda;
    if(marca){
        return zapatilla.marca === marca;
    }
    return zapatilla;
}
function filtrarGenero(zapatilla) {
    const {genero} = datosBusqueda;
    if(genero){
        return zapatilla.genero === genero;
    }
    return zapatilla;
}
function filtrarColor(zapatilla) {
    const {color} = datosBusqueda;
    if(color){
        return zapatilla.color === color;
    }
    return zapatilla;
}
function filtrarTalla(zapatilla) {
    const {talla} = datosBusqueda;
    if(talla){
        return zapatilla.talla === talla;
    }
    return zapatilla;
}
function filtrarMinimo(zapatilla) {
    const {minimo} = datosBusqueda;
    if(minimo){
        return zapatilla.precio >= minimo;
    }
    return zapatilla;
}
function filtrarMaximo(zapatilla) {
    const {maximo} = datosBusqueda;
    if(maximo){
        return zapatilla.precio <= maximo;
    }
    return zapatilla;
}

