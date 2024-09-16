//arreglo simple de frutas
frutas = ["manzana", "pera", "naranja", "banano"]
console.log(frutas)

//arreglo como objeto para una persona
persona = {
    nombre: "Juan",
    edad:20,
    ciudad: "Bogota",
    ocupacion: "Estudiante",
    hobbies: ["leer", "escuchar musica", "viajar"],
    amigos: ["Pedro", "Maria", "Luis"]
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.ciudad)
console.log(persona.ocupacion)
console.log(persona.hobbies)
console.log(persona.amigos)
//acceder a un elemento del arreglo
console.log(persona.amigos[0]) 


//Aqui esta la estructura general de una lista enlazada
// Definimos un nodo
class Nodo {
    constructor(valor) {
        this.valor = valor;  // El valor almacenado en el nodo
        this.siguiente = null;  // El puntero al siguiente nodo
    }
}

// Definimos la lista enlazada
class ListaEnlazada {
    constructor() {
        this.cabeza = null;  // El primer nodo de la lista
    }

    // Insertar al inicio
    insertarInicio(valor) {
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
    }

    // Eliminar el nodo del inicio
    eliminarInicio() {
        if (this.cabeza === null) {
            console.log('La lista está vacía');
            return;
        }
        this.cabeza = this.cabeza.siguiente;
    }

    // Mostrar la lista
    mostrarLista() {
        let actual = this.cabeza;
        while (actual !== null) {
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }
}

//Ejemplo de uso de la lista enlazada
const lista = new ListaEnlazada();
lista.insertarInicio(10);
lista.insertarInicio(20);
lista.insertarInicio(30);
lista.mostrarLista();  

// Eliminar el nodo del inicio
lista.eliminarInicio();

// Mostrar la lista después de eliminar el primer nodo
console.log("Lista después de eliminar el primer nodo:");
lista.mostrarLista();


// arreglo de tipo pila para datos de almacen

pila = []
pila.push("automovil1")
pila.push("automovil2")
pila.push("automovil3")
console.log(pila)
//retirar un elemento de la pila
console.log(pila.pop())
console.log(pila)
//retirar un elemento de la pila
console.log(pila.pop())
console.log(pila)
//retirar un elemento de la pila
console.log(pila.pop())
console.log(pila)

// arreglo tipo cola para los datos del almacen
cola = []
cola.push("automovil1")
cola.push("automovil2")
cola.push("automovil3")
console.log(cola)
//retirar un elemento de la cola
console.log(cola.shift())
console.log(cola)
//retirar un elemento de la cola
console.log(cola.shift())
console.log(cola)
//retirar un elemento de la cola
console.log(cola.shift())
console.log(cola)
