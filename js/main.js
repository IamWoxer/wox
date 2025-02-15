document.addEventListener("DOMContentLoaded", function () {
    cargarTablaPosiciones();
});

function cargarTablaPosiciones() {
    const tablaBody = document.getElementById("tabla-body");
    
    const posiciones = [
        { posicion: 1, piloto: "Max Verstappen", equipo: "Red Bull", puntos: 369 },
        { posicion: 2, piloto: "Lewis Hamilton", equipo: "Mercedes", puntos: 325 },
        { posicion: 3, piloto: "Charles Leclerc", equipo: "Ferrari", puntos: 290 },
        { posicion: 4, piloto: "Sergio Pérez", equipo: "Red Bull", puntos: 260 },
        { posicion: 5, piloto: "Carlos Sainz", equipo: "Ferrari", puntos: 245 }
    ];
    
    posiciones.forEach(posicion => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${posicion.posicion}</td>
            <td>${posicion.piloto}</td>
            <td>${posicion.equipo}</td>
            <td>${posicion.puntos}</td>
        `;
        tablaBody.appendChild(fila);
    });
}
