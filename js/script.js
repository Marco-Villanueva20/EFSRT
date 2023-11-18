document.getElementById('form-comparacion').addEventListener('submit', function(event) {
    // Evita que la página se recargue cuando se envía el formulario
    event.preventDefault();

    // Obtiene los productos seleccionados
    var producto1 = document.getElementById('producto1').value;
    var producto2 = document.getElementById('producto2').value;

    // Busca la información nutricional de los productos
    // Nota: Necesitarás reemplazar esta parte con tu propio código
    var infoNutricionalProducto1 = buscarInfoNutricional(producto1);
    var infoNutricionalProducto2 = buscarInfoNutricional(producto2);

    // Muestra los resultados en el div "resultado-comparacion"
    var resultadoComparacion = document.getElementById('resultado-comparacion');
    resultadoComparacion.innerHTML = '<h2>Resultados de la Comparación</h2>' +
        '<p>' + producto1 + ': ' + infoNutricionalProducto1 + '</p>' +
        '<p>' + producto2 + ': ' + infoNutricionalProducto2 + '</p>';
});

function buscarInfoNutricional(producto) {
    // Esta función debería buscar la información nutricional del producto
    // Nota: Necesitarás reemplazar esta función con tu propio código
    return 'Información nutricional de ' + producto;
}
    