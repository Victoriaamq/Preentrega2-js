const productosVariados = [
    {
        id: 1,
        nombre: 'Remeras Vans',
        precio: 15.00,
        categoria: 'Indumentaria',
        stock: 100
    },
    {
        id: 2,
        nombre: 'Cargos Quiksilver',
        precio: 20.00,
        categoria: 'Indumentaria',
        stock: 200
    },
    {
        id: 3,
        nombre: 'Reloj Casio',
        precio: 100.00,
        categoria: 'Accesorio',
        stock: 50
    },
    {
        id: 4,
        nombre: 'Funko Pop Kakashi',
        precio: 5.00,
        categoria: 'Accesorio',
        stock: 150
    },
    {
        id: 5,
        nombre: 'Monitor LED Curvo',
        precio: 1500.00,
        categoria: 'Electronico',
        stock: 100
    },
    {
        id: 4,
        nombre: 'Procesador Core i3',
        precio: 150.00,
        categoria: 'Electronico',
        stock: 300
    },
]

let bandera = true
let carrito = []

//Find, filter, forEach, map
function agregadoraDeCarrito(el){
    carrito.push(el)
}

function stockManejador(producto, cantidad){
    let estaONoEsta = carrito.some((el)=>{
        return el.id === producto.id
    })

    if(estaONoEsta){
        let objetoEnDB = productosVariados.find((el)=>{
            return el.id === producto.id
        })
        if(cantidad > objetoEnDB.stock){
            alert("Hasta llegado al stock limite, lo sentimos.")
        }else{
            let objetoDelCarrito = carrito.find((el)=>{
            return el.id === producto.id
        })
            objetoDelCarrito.stock += cantidad
            objetoEnDB -= cantidad
        }
        
    }else{
        let objetoEnDB = productosVariados.find((el)=>{
            return el.id === producto.id
        })
        if(cantidad > objetoEnDB.stock){
            alert("Hasta llegado al stock limite, lo sentimos.")
        }else{
            objetoEnDB.stock -= cantidad
            agregadoraDeCarrito({
                nombre: producto.nombre,
                precio: producto.precio,
                id: producto.id,
                stock: cantidad
            })
        }
    }}

function compra(id){
    let productoBuscado = productosVariados.find((el)=>{
        return el.id === id
    })
    if(productoBuscado){
        let cantidad = parseInt(prompt("¿Cuantas quiere comprar?"))
        stockManejador(productoBuscado, cantidad)
        }else{
        alert("Producto no existes")
    }
    
}

function logicaDeCompra(){
    let mensaje = "Los productos son:\n"
    productosVariados.forEach(el =>{
        mensaje += `${el.id}-${el.nombre}\n`
    }) 
    let productoId = parseInt(prompt (mensaje))
    compra(productoId)
    alert(mensaje)
}

function mostrarElCarrito(){
    let mensaje = "Su carrito es:\n"
    productosVariados.forEach(el =>{
        mensaje += `${el.nombre}-${el.stock}\n`
    }) 
    let total = carrito.reduce((acc, el)=>{
        return acc + el.stock * el.precio
    }, 0)
    mensaje += `El total es: ${total}\n`
    alert(mensaje)
}

function filtradoDeCategoria(categoria){
    const arrayFiltrado = productosVariados.filter(el=>{
        return el.categoria.toLowerCase() === categoria.toLoweCase()
    })
    let mensaje = "Los productos filtrados son: \n"
    arrayFiltrado.forEach(el =>{
        mensaje += `${el.nombre}\n`
    })
    alert(mensaje)
}


function logicaDeFiltro(){
    let categoria = prompt("¿De que categoria quiere buscar?")
    filtradoDeCategoria(categoria)
}

function busquedaAPartirDelID(id){
    let objetoABuscar = productosVariados.find((el)=>{
        return el.id === id
    })
    if(objetoABuscar){
        alert(`El proucto que busca esta en:\n Nombre: ${objetoABuscar.nombre}\n Categoria: ${objetoABuscar.categoria} \n Precio: ${objetoABuscar.precio}`)
    }else{
        alert("El objeto que busca, no existe.")
    }
}

function logicaDeCompra(){
    let id = parseInt(prompt("¿Que desea buscar?"))
    busquedaAPartirDelID(id)
}

while(bandera){
    let opciones = parseInt(prompt("¿Que quiere hacer? \n 1-Comprar\n 2-Filtrar\n 3-Buscar"))

    switch(opciones){
        case 1:
            logicaDeCompra()
        break
        case 2:
            logicaDeFiltro()
            break
        case 3:
            logicaDeCompra()
            break
            default:
                alert("Opcion incorrecta")
    }
    bandera = confirm ("¿Quiere seguir comprando?")
}
mostrarElCarrito()

function mostrarCategoria(categoria) {
    // Ocultar todas las categorías
    var producto = document.querySelectorAll('.producto');
    producto.forEach(function(producto) {
        producto.classList.remove('active');
    });

    //Mostrar la categoría seleccionada
    var catalogoSeleccionado = document.getElementById(categoria);
    if (catalogoSeleccionado) {
       catalogoSeleccionado.classList.add('active');
    }
}
//console.dir(producto)
//console.dir(catalogoSeleccionado)

//Mostrar la primera categoría por defecto
mostrarCategoria('accesorios');

//const nodoAccessorios = document.getElementById ("accesorios")
//const nodosAccesorios = document.getElementsByClassName ("accesorios")
//console.dir(nodoAccessorios)
//console.dir(nodosAccesorios)
const nodoAccesorios = document.getElementById ("accesorios")
const nodosProducto = document.getElementsByClassName ("producto")
const nodosDivs = document.getElementsByTagName ("div")

const nodoAccesoriosQuery = document.querySelector ("#accesorios")
const nodosProductoQueryClass = document.querySelectorAll (".producto")

console.dir(nodoAccesorios)
console.dir(nodosProducto)
console.dir(nodosDivs)
console.log("-------------------------------")
console.dir(nodoAccesoriosQuery)
console.log(nodoAccesoriosQuery)