/*document.getElementById('form-comparacion').addEventListener('submit', function(event) {
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
}*/

const productos = [
    {
        id: "p_lacteo_1",
        nombre: "La Lechera Leche Condensada Entera",
        descripcion: "desde 1936 la original leche condensada con 100% ingredientes naturales. Su sabor y consistencia inigualables garantizan momentos dulces para compartir con los tuyos en todo momento.",
        imagen:"../img/La Lechera Leche Condensada Entera.jpg",
        energia: 321,
        proteinas: 7.5,
        carbohidratos: 54.9,
        grasas: 8.0
    },
    {
        id: "p_lacteo_2",
        nombre: "La Lechera Leche Condensada Desnatada",
        descripcion: "Está elaborada a base de leche fresca de vaca, a la que se evapora parte del agua y se cocina con azúcar. Con la cocción con el azúcar, la leche se espesa y carameliza dando este sabor y texturas tan golosas, casi un postre en sí mismo.",
        imagen:"../img/La Lechera Leche Condensada Desnatada.jpg",
        energia: 281,
        proteinas: 8.9,
        carbohidratos: 60.8,
        grasas: 0.2
    }

]

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){
    productos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =
        `
        <img class="card-img-top" style="width:400px" src="${producto.imagen}" alt="${producto.nombre}">
        <div class="card-body">
            <h2 class="card-title">${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <h3>Información Nutricional (100 gr)</h3>
            <p>Valor Energetico(Kcal): ${producto.energia}</p>
            <p>Proteinas: ${producto.proteinas}</p>
            <p>CarboHidratos: ${producto.carbohidratos}</p>
            <p>Grasas: ${producto.grasas}</p>
        </div>
        `
        contenedorProductos.append(div);
    })
}

cargarProductos();

/*
            
                <img class="card-img-top" src="ruta/a/la/imagen/del/producto2.jpg" alt="Imagen del Producto 2">
                <div class="card-body">
                    <h2 class="card-title">Nombre del Producto 2</h2>
                    <p>Descripción del producto aquí</p>
                    <h3>Información Nutricional</h3>
                    <p>Información nutricional aquí</p>
                </div>
            </div>


   */ 