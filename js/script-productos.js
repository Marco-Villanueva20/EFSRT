
const productos = [
    {
        id: "p_lacteo_1",
        nombre: "La Lechera Leche Condensada Entera",
        descripcion: "Desde 1936 la original leche condensada con 100% ingredientes naturales. Su sabor y consistencia inigualables garantizan momentos dulces para compartir con los tuyos en todo momento.",
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
    ,
    {
        id: "p_lacteo_3",
        nombre: "La Lechera Leche Condensada Desnatada Sin Lactosa",
        descripcion: "Está elaborada a base de leche fresca de vaca, a la que se evapora parte del agua y se cocina con azúcar. Con la cocción con el azúcar, la leche se espesa y carameliza dando este sabor y texturas tan golosas, casi un postre en sí mismo.",
        imagen:"../img/La Lechera Leche Condensada Desnatada Sin Lactosa.jpg",
        energia: 280,
        proteinas: 8.9,
        carbohidratos: 60.6,
        grasas: 0.2
    }
    ,
    {
        id: "p_lacteo_4",
        nombre: "Nutricia Leche Condensada Desnatada",
        descripcion: "Está elaborada a base de leche fresca de vaca, a la que se evapora parte del agua y se cocina con azúcar. Con la cocción con el azúcar, la leche se espesa y carameliza dando este sabor y texturas tan golosas, casi un postre en sí mismo.",
        imagen:"../img/Nutricia Leche Condensada Desnatada.jpg",
        energia: 281,
        proteinas: 8.9,
        carbohidratos: 60.8,
        grasas: 0.2
    }
    ,
    {
        id: "p_lacteo_5",
        nombre: "Nutricia Leche Condensada Entera",
        descripcion: "La leche condensada entera Nutricia es uno de los productos más populares en los supermercados Mercadona. Este producto se presenta en un envase de 1 kg y es fabricado por la marca Nutricia, una empresa especializada en la producción de alimentos infantiles y nutricionales.",
        imagen:"../img/Nutricia Leche Condensada Entera.jpg",
        energia: 321,
        proteinas: 7.5,
        carbohidratos: 54.9 ,
        grasas: 8.0
    }
    ,
    {
        id: "p_lacteo_6",
        nombre: "Leche Condensada Entera el Castillo",
        descripcion: " Es una leche condensada de la marca El Castillo. Está hecha de leche fresca y tiene un contenido de grasa del 8%. Una vez abierto, debe conservarse en el frigorífico y consumirse antes de 3-4 días",
        imagen:"../img/Leche Condensada Entera el Castillo.jpg",
        energia: 321,
        proteinas: 7.5,
        carbohidratos: 54.9,
        grasas: 8.0
    }
    ,
    {
        id: "p_lacteo_7",
        nombre: "La Lechera Veggie",
        descripcion: "Es una alternativa vegetal a la leche condensada para hacer postres veganos y vegetarianos. Está hecha a base de avena, arroz y azúcar, 100% de origen vegetal",
        imagen:"../img/La Lechera Veggie.jpg",
        energia: 332,
        proteinas: 1.6,
        carbohidratos: 61.8,
        grasas: 8.6
    }
    ,
    {
        id: "p_lacteo_8",
        nombre: "La Lechera Chocolate", 
        descripcion: "La leche condensada La Lechera Chocolate es un producto natural, elaborado a partir de cacao y leche fresca recogida a diario en Galicia. Nestlé La Lechera ofrece calidad y confianza desde hace más de 100 años y es una dulce solución culinaria para hacer postres con un sabor único y cremoso.",
        imagen:"../img/La Lechera Chocolate.jpg",
        energia: 316,
        proteinas: 7.0,
        carbohidratos: 54.8,
        grasas: 7.2
    }
    ,
    {
        id: "p_lacteo_9",
        nombre: "La Lechera Dulce de Leche Lata (untar)",
        descripcion: "Es un dulce de leche de la marca La Lechera. Se presenta en una lata de 397g y está hecho de leche y azúcar. Es ideal para untar y hacer rellenos y coberturas",
        imagen:"../img/La Lechera Dulce de Leche Lata (untar).jpg",
        energia: 303,
        proteinas: 5.6,
        carbohidratos: 56.5,
        grasas: 0.2
    }
    ,
    {
        id: "p_lacteo_10",
        nombre: "La Lechera Dulce de Leche SirveFácil(topping)",
        descripcion: "Es un dulce de leche de la marca La Lechera que viene en una botella exprimible fácil de usar. Es perfecto para agregar un sabor auténtico a tus antojos, postres y bocadillos.",
        imagen:"../img/La Lechera Dulce de Leche SirveFácil(topping).jpg",
        energia: 313,
        proteinas: 7.3,
        carbohidratos: 53.0,
        grasas: 0.2
    }
    ,
    {
        id: "p_lacteo_11",
        nombre: "Sveltesse Leche Desnatada en polvo",
        descripcion: "Es una leche desnatada en polvo de la marca Sveltesse. Está hecha de leche de vaca de excelente calidad, a la que se le ha quitado la grasa de la leche, sin perder ninguna de sus vitaminas",
        imagen:"../img/Sveltesse Leche Desnatada en polvo.jpg",
        energia: 370,
        proteinas: 36.3,
        carbohidratos: 54.0,
        grasas: 1.0
    }
    ,
    {
        id: "p_lacteo_12",
        nombre: "Ideal Leche evaporada (monodosis)",
        descripcion: "Es una leche evaporada de la marca Ideal que viene en monodosis. Es la mejor opción para tu café y está hecha con leche fresca recogida de Galicia.",
        imagen:"../img/Ideal Leche evaporada (monodosis).jpg",
        energia: 153,
        proteinas: 5.9,
        carbohidratos: 9.8,
        grasas: 10.0
    }
    ,
    {
        id: "p_lacteo_13",
        nombre: "Ideal Leche evaporada (brik)",
        descripcion: " Es una leche a la que se le ha retirado parte del agua mediante un proceso de evaporación. Conserva todas sus propiedades nutritivas y es una alternativa saludable a la nata para cocinar salsas y cremas ligeras",
        imagen:"../img/Ideal Leche evaporada (brik).jpg",
        energia: 109,
        proteinas: 7.4,
        carbohidratos: 11.0,
        grasas: 4.0
    }
    ,
    {
        id: "p_lacteo_14",
        nombre: "Ideal Leche evaporada Sin Lactosa",
        descripcion: " Es similar a la leche evaporada regular, pero está diseñada para personas que son intolerantes a la lactosa. Conserva todas las propiedades nutritivas de la leche.",
        imagen:"../img/Ideal Leche evaporada Sin Lactosa.jpg",
        energia: 109,
        proteinas: 7.4,
        carbohidratos: 11.0,
        grasas: 4.0
    }
    ,
    {
        id: "p_lacteo_15",
        nombre: "Ideal avena",
        descripcion: "Es una base vegetal para cocinar salsas y cremas ligeras, elaborada a base de avena integral procedente de agricultura ecológica",
        imagen:"../img/Ideal avena.jpg",
        energia: 81,
        proteinas: 1.0,
        carbohidratos: 5.0,
        grasas: 6.2
    }
    ,
    {
        id: "p_lacteo_16",
        nombre: "Yogur natural x4",
        descripcion: "Es un yogur clásico elaborado con leche fresca y fermentos naturales. Se vende en paquetes de 4 unidades",
        imagen:"../img/Yogur natural x4.png",
        energia: 57,
        proteinas: 3.4,
        carbohidratos: 4.9,
        grasas: 2.6
    }
    ,
    {
        id: "p_lacteo_17",
        nombre: "Yogur azucarado x4",
        descripcion: " Es similar al yogur natural, pero se le ha añadido azúcar para darle un sabor más dulce. También se vende en paquetes de 4 unidades",
        imagen:"../img/Yogur azucarado x4.png",
        energia: 74,
        proteinas: 2.9,
        carbohidratos: 11.4,
        grasas: 1.9
    }
    ,
    {
        id: "p_lacteo_18",
        nombre: "Multipack natural x8",
        descripcion: "Es un paquete de 8 yogures naturales. Cada yogur está elaborado con leche fresca y fermentos naturales.",
        imagen:"../img/Multipack natural x8.jpg",
        energia: 57,
        proteinas: 3.4,
        carbohidratos: 4.9,
        grasas: 2.6
    }
    ,
    {
        id: "p_lacteo_19",
        nombre: "Yogur sabor limón",
        descripcion: "Es un yogur con sabor a limón. Está elaborado con leche fresca, fermentos naturales y aroma natural de limón",
        imagen:"../img/Yogur sabor limón.jpg",
        energia: 74,
        proteinas: 2.9,
        carbohidratos: 11.4,
        grasas: 1.9
    }
    ,
    {
        id: "p_lacteo_20",
        nombre: "Yogur sabor fresa",
        descripcion: "El yogur de fresa es un producto lácteo que combina la textura cremosa del yogur con el dulce y ligeramente ácido sabor de las fresas. Se elabora añadiendo sabor a fresa al yogur durante el proceso de fermentación.",
        imagen:"../img/Yogur sabor fresa.png",
        energia: 74,
        proteinas: 2.9,
        carbohidratos: 11.4,
        grasas: 1.9
    }
    ,
    {
        id: "p_lacteo_21",
        nombre: "Yogur sabor coco",
        descripcion: " El yogur de coco es un producto lácteo que combina el sabor tropical del coco con la textura cremosa del yogur. Se elabora añadiendo sabor a coco al yogur durante el proceso de fermentación. ",
        imagen:"../img/Yogur sabor coco.png",
        energia: 27481,
        proteinas: 2.9,
        carbohidratos: 11.4,
        grasas: 1.9
    }
    ,
    {
        id: "p_lacteo_22",
        nombre: "Yogur sabor macedonia",
        descripcion: " El yogur de macedonia es un producto lácteo que combina el sabor de varias frutas con la textura cremosa del yogur. Se elabora añadiendo sabor a macedonia al yogur durante el proceso de fermentación.",
        imagen:"../img/Yogur sabor macedonia.jpg",
        energia: 74,
        proteinas: 2.9,
        carbohidratos: 11.4,
        grasas: 1.9
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
            <a href="producto.html" id="${producto.id}" class="enlace-productos">Ver detalles</a>
        </div>
        `
        contenedorProductos.append(div);
    })
}

cargarProductos();

const productoSeleccionado = document.querySelectorAll(".enlace-productos");

productoSeleccionado.forEach(boton => {
    boton.addEventListener("click", redirigirAProducto);
})

function redirigirAProducto(e) {
    e.preventDefault(); // Evita que el enlace se siga inmediatamente
    const idProducto = e.target.id; // Obtiene el id del producto
    console.log(idProducto)
    window.location.href = `producto.html?id=${idProducto}`; // Redirige a la página del producto con el id del producto en la URL
}
