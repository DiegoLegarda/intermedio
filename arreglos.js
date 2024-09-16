// arreglo de frutas
const frutas = ["manzana", "fresa", "naranja", "banano"]
console.log(frutas)
frutas.push("pera")
console.log(frutas)
console.log(frutas.length)
console.log(frutas[2])

//document.getElementById('texto').value=frutas.toString();

// arreglo como objeto
const persona = {nombre:'Juan', edad:20, ciudad:'Bogotá',amigos:['Pedro','Camilo'],
    mascotas:['perro','gato'],frutas:["manzana", "fresa", "naranja", "banano"]}

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);
console.log(persona.amigos);
console.log(persona.mascotas);

//arreglo de numeros
const  numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros.length);
numeros.push(20);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.unshift(30);
console.log(numeros);
const numerospares=[2,4,6,8];
const nuevo=numeros.concat(numerospares);
console.log(nuevo);
const nuevo2=numeros.slice(1,4);
console.log(nuevo2);
const nuevo3=numeros.splice(1,2);
console.log(nuevo3)
console.log(numeros)
numeros.includes()


//arreglo como pila para animales
const animales = ["perro","gato","pajaro","tortuga"];
console.log(animales);
animales.push("leon");
console.log(animales);
console.log(animales[animales.length-1])
animales.pop();
console.log(animales);

//arreglo de animales como cola

console.log(animales[0]);
animales.shift();
console.log(animales);
animales.push('tigre');
console.log(animales);

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
lista.insertarInicio("perro");
lista.insertarInicio("gato");
lista.insertarInicio("raton");
lista.mostrarLista();  

// Eliminar el nodo del inicio
lista.eliminarInicio();

// Mostrar la lista después de eliminar el primer nodo
console.log("Lista después de eliminar el primer nodo:");
lista.mostrarLista();


