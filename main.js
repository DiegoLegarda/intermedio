
//**********************************************************
// Construcción de grafo
const grafo = {
    'Bogotá': [{ destino: 'Medellin', peso: 410 }, { destino: 'Ibagué', peso: 210 }, { destino: 'Villavicencio', peso: 122 }, { destino: 'Tunja', peso: 139 }],
    'Medellin': [{ destino: 'Tunja', peso: 413 }, { destino: 'Baranquilla', peso: 723 }],
    'Ibagué': [{ destino: 'Cali', peso: 253 }, { destino: 'Neiva', peso: 211 }],
    'Villavicencio': [{ destino: 'Yopal', peso: 261 }]
};

console.log(grafo);

//***********************************************************
//  FUnciones de busqueda

function busquedaConSuma(grafo, inicio, objetivo) {
    const cola = [{ nodo: inicio, suma: 0 }];
    const visitados = new Set();
    while (cola.length > 0) {
        const { nodo, suma } = cola.shift();
        if (nodo === objetivo) {
            return suma;
        }
        if (!visitados.has(nodo)) {
            visitados.add(nodo);
            if (grafo[nodo]) {
                for (const arista of grafo[nodo]) {
                    cola.push({ nodo: arista.destino, suma: suma + arista.peso });
                }
            }
        }
    }
    return -1;
}

function bfs(grafo, origen, destino) {
    const visitados = {};
    const cola = [];
    const camino = {};
    const distancias = {};

    visitados[origen] = true;
    cola.push(origen);
    distancias[origen] = 0;

    while (cola.length > 0) {
        const nodoActual = cola.shift();
        if (nodoActual === destino) {
            const ruta = [];
            let nodo = destino;
            while (nodo !== origen) {
                ruta.unshift(nodo);
                nodo = camino[nodo];
            }
            ruta.unshift(origen);
            return { camino: ruta, distancia: distancias[destino] };
        }

        for (let vecino of grafo[nodoActual] || []) {
            if (!visitados[vecino.destino]) {
                visitados[vecino.destino] = true;
                cola.push(vecino.destino);
                camino[vecino.destino] = nodoActual;
                distancias[vecino.destino] = distancias[nodoActual] + vecino.peso;
            }
        }
    }
    return { camino: [], distancia: undefined };
}


//************************************************************
//      Construccion de la lista
const selectNodos = document.getElementById('ciudades');
const nodosUnicos = new Set();
for (const nodoOrigen in grafo) {
    nodosUnicos.add(nodoOrigen);
    grafo[nodoOrigen].forEach(destino => {
        nodosUnicos.add(destino.destino);
    });
}

const nodosOrdenados = Array.from(nodosUnicos).sort();
nodosOrdenados.forEach(nodo => {
    const option = document.createElement('option');
    option.value = nodo; 
    option.textContent = nodo; 
    selectNodos.appendChild(option);
});

//*************************************************************
//          Funciones con eventos

function busqueda() {
    const origen = 'Bogotá';
    const selectDestino = document.getElementById('ciudades');
    const destino = selectDestino.value;
    console.log('Valor seleccionado:', destino);
    const { camino, distancia } = bfs(grafo, origen, destino);
    console.log('Camino encontrado:', camino.length > 0 ? camino.join(' -> ') : 'No se encontró un camino.');
    if(camino!=0){
        document.getElementById('ruta').textContent = `La ruta es: ${camino.join(' -> ')}`;
    }
    console.log('Distancia del camino:', distancia !== undefined ? distancia : 'No se encontró un camino.');
    let peso=document.getElementById('peso').value;
    console.log('Valor a pagar:',calculoValor(distancia,peso));
    let valorPagar=calculoValor(distancia,peso);
    const formatoPesos = valorPagar.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById('valorenvio').textContent = `El precio a pagar es es: ${formatoPesos}`;
    document.getElementById('tiempo').textContent = `El tiempo de entrega es de: ${calcularDiasEntrega(distancia)} días`;
}

function calculoValor(distancia, peso){
    let valor=10000+parseInt((distancia*152.68)*(peso/10))
    return valor;
}

function calcularDiasEntrega(distancia) {
    const dias = Math.ceil(distancia / 100);
    return dias;
}

function clear(){
    document.getElementById('ruta').textContent = '';
    document.getElementById('valorenvio').textContent = '';
    document.getElementById('tiempo').textContent = '';    
}

document.getElementById('enviar').addEventListener('click', busqueda);
document.getElementById('ciudades').addEventListener('change', clear);
document.getElementById('peso').addEventListener('change', clear);