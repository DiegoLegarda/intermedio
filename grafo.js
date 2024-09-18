class Grafo {
    constructor() {
        this.adjacencia = new Map();  // Un mapa para almacenar listas de adyacencia
    }

    // Método para agregar un nodo (vértice) al grafo
    agregarNodo(nodo) {
        if (!this.adjacencia.has(nodo)) {
            this.adjacencia.set(nodo, []);
        }
    }

    // Método para agregar una arista (con peso) entre dos nodos
    agregarArista(nodo1, nodo2, peso = 1) {
        if (!this.adjacencia.has(nodo1)) {
            this.agregarNodo(nodo1);
        }
        if (!this.adjacencia.has(nodo2)) {
            this.agregarNodo(nodo2);
        }
        this.adjacencia.get(nodo1).push({ destino: nodo2, peso });
        this.adjacencia.get(nodo2).push({ destino: nodo1, peso });
    }

    // Mostrar el grafo (nodos y sus aristas)
    mostrarGrafo() {
        for (let [nodo, aristas] of this.adjacencia) {
            let conexiones = aristas.map(arista => `${arista.destino} (${arista.peso})`).join(", ");
            console.log(`${nodo} está conectado a: ${conexiones}`);
        }
    }
}

// Crear un nuevo grafo
const grafo = new Grafo();

// Agregar nodos y aristas con sus pesos
grafo.agregarArista('A', 'B', 5);
grafo.agregarArista('A', 'C', 3);
grafo.agregarArista('B', 'D', 4);
grafo.agregarArista('C', 'D', 7);
grafo.agregarArista('C', 'E', 8);
grafo.agregarArista('D', 'E', 2);

// Mostrar la estructura del grafo
console.log("Estructura del grafo:");
grafo.mostrarGrafo();


