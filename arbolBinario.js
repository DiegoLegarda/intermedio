class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}
class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    // Método para agregar un nuevo nodo
    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._agregarRecursivo(this.raiz, nuevoNodo);
        }
    }

    // Método recursivo para encontrar la posición correcta en el árbol
    _agregarRecursivo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this._agregarRecursivo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this._agregarRecursivo(nodo.derecha, nuevoNodo);
            }
        }
    }

    // Recorrido en preorden
    preorden(nodo = this.raiz) {
        if (nodo !== null) {
            console.log(nodo.valor); // Procesar el nodo
            this.preorden(nodo.izquierda); // Recorrer el subárbol izquierdo
            this.preorden(nodo.derecha);  // Recorrer el subárbol derecho
        }
    }

    // Recorrido en inorden
    inorden(nodo = this.raiz) {
        if (nodo !== null) {
            this.inorden(nodo.izquierda); // Recorrer el subárbol izquierdo
            console.log(nodo.valor);      // Procesar el nodo
            this.inorden(nodo.derecha);   // Recorrer el subárbol derecho
        }
    }

    // Recorrido en postorden
    postorden(nodo = this.raiz) {
        if (nodo !== null) {
            this.postorden(nodo.izquierda); // Recorrer el subárbol izquierdo
            this.postorden(nodo.derecha);   // Recorrer el subárbol derecho
            console.log(nodo.valor);        // Procesar el nodo
        }
    }
}

const arbol = new ArbolBinario();
arbol.agregar(10);
arbol.agregar(5);
arbol.agregar(15);
arbol.agregar(3);
arbol.agregar(7);
arbol.agregar(12);
arbol.agregar(18);

console.log("Recorrido Preorden:");
arbol.preorden(); 

console.log("Recorrido Inorden:");
arbol.inorden(); 

console.log("Recorrido Postorden:");
arbol.postorden(); 
