// Definición del nodo de un árbol multirrama
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.hijos = [];  // Arreglo para almacenar varios hijos
    }

    // Método para agregar hijos a un nodo
    agregarHijo(nodoHijo) {
        this.hijos.push(nodoHijo);
    }
}

// Definición del árbol multirrama
class ArbolMultirrama {
    constructor(valorRaiz) {
        this.raiz = new Nodo(valorRaiz);  
    }

    // Método para hacer un recorrido en preorden del árbol (raíz, luego hijos)
    recorridoPreOrden(nodo) {
        if (nodo == null) return;

        console.log(nodo.valor);  // Procesa el nodo actual

        // Recursivamente llama a la función para cada hijo
        nodo.hijos.forEach(hijo => {
            this.recorridoPreOrden(hijo);
        });
    }
}

// Creando un árbol multirrama
const arbol = new ArbolMultirrama('Raíz');

// Agregando nodos al árbol
const nodoA = new Nodo('A');
const nodoB = new Nodo('B');
const nodoC = new Nodo('C');
const nodoD = new Nodo('D');
const nodoE = new Nodo('E');

// Agregando hijos a la raíz
arbol.raiz.agregarHijo(nodoA);
arbol.raiz.agregarHijo(nodoB);
arbol.raiz.agregarHijo(nodoC);

// Agregando hijos a los nodos
nodoA.agregarHijo(nodoD);
nodoA.agregarHijo(nodoE);

// Realizando un recorrido en preorden
arbol.recorridoPreOrden(arbol.raiz);
