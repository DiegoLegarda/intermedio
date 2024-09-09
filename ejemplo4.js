// Clase para representar un producto
class Producto {
    constructor(nombre, categoria, cantidad, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Categoría: ${this.categoria}, Cantidad: ${this.cantidad}, Precio: $${this.precio}`);
    }
}

//clase para manejo de inventario
class Inventario {
    constructor() {
        this.productos = []; 
    }

    
    agregarProducto(nombre, categoria, cantidad, precio) {
        const nuevoProducto = new Producto(nombre, categoria, cantidad, precio);
        this.productos.push(nuevoProducto);
        console.log(`Producto ${nombre} agregado al inventario.`);
    }

    
    mostrarInventario() {
        console.log("Inventario Actual:");
        this.productos.forEach(producto => producto.mostrarDetalles());
    }

   
    actualizarCantidad(nombre, cantidad) {
        const producto = this.productos.find(prod => prod.nombre === nombre);
        if (producto) {
            producto.cantidad += cantidad;
            console.log(`Cantidad de ${nombre} actualizada a ${producto.cantidad}`);
        } else {
            console.log(`Producto ${nombre} no encontrado en el inventario.`);
        }
    }

    
    eliminarProducto(nombre) {
        const index = this.productos.findIndex(prod => prod.nombre === nombre);
        if (index !== -1) {
            this.productos.splice(index, 1);
            console.log(`Producto ${nombre} eliminado del inventario.`);
        } else {
            console.log(`Producto ${nombre} no encontrado en el inventario.`);
        }
    }
}

// Ejemplo de uso
const miInventario = new Inventario();
miInventario.agregarProducto("Manzanas", "Frutas", 50, 3000);
miInventario.agregarProducto("Leche", "Lácteos", 30, 6000);
miInventario.mostrarInventario(); 

miInventario.actualizarCantidad("Manzanas", 20); 
miInventario.eliminarProducto("Leche"); 
miInventario.mostrarInventario(); 
