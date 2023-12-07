document.addEventListener("DOMContentLoaded", function() {
    const formularioCasa = document.getElementById("formularioCasa");
    const contenedorCasas = document.getElementById("contenedorCasas");

    formularioCasa.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = formularioCasa.nombre.value;
        const descripcion = formularioCasa.descripcion.value;
        const imagen = formularioCasa.imagen.files[0];

        const nuevaCasa = document.createElement("div");
        nuevaCasa.classList.add("carta");

        nuevaCasa.innerHTML = `
            <h3>${nombre_casa}</h3>
            <p>${descripcion}</p>
            <button>+ Info</button>
        `;
        const imagenURL = URL.createObjectURL(imagen);
        nuevaCasa.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imagenURL})`;

        contenedorCasas.insertBefore(nuevaCasa, contenedorCasas.firstChild);

        formularioCasa.reset();
    });
});
