const fila = document.querySelector('.container-carousel')
const peliculas = document.querySelectorAll('.movie')

const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

// ------ ------ Event listener para la flecha derecha. ------ ------
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .active');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('.active');
        indicadorActivo.classList.remove('.active');
    }
});

// ------ ------ Event listener para la flecha izquierda. ------ ------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .active');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('.active');
        indicadorActivo.classList.remove('.active');
    }
});

// ------ ------ Paginación ------ ------
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');

    if (i === 0) {
        indicador.classList.add('.active');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .active').classList.remove('activo');
        e.targer.classList.add('active');
    });
}

// ------ ------ hover ------ ------
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 200);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});