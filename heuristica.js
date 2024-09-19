const grafo = {
    'Bogotá': [{ destino: 'Medellin', peso: 410 }, { destino: 'Ibagué', peso: 210 }, { destino: 'Villavicencio', peso: 122 }, { destino: 'Tunja', peso: 139 }],
    'Medellin': [{ destino: 'Tunja', peso: 413 }, { destino: 'Baranquilla', peso: 723 }],
    'Ibagué': [{ destino: 'Cali', peso: 253 }, { destino: 'Neiva', peso: 211 }],
    'Villavicencio': [{ destino: 'Yopal', peso: 261 }]
};

// Función para calcular la distancia total de una ruta
function calcularDistanciaTotal(ruta) {
    let distanciaTotal = 0;
    for (let i = 0; i < ruta.length - 1; i++) {
        const origen = ruta[i];
        const destino = ruta[i + 1];
        const conexion = grafo[origen].find(con => con.destino === destino);
        distanciaTotal += conexion.peso;
    }
    return distanciaTotal;
}

// Implementación del algoritmo de las luciérnagas para encontrar la mejor ruta
function encontrarMejorRuta(origen, destino, numLuciernagas, maxIteraciones) {
    // Inicialización de luciérnagas aleatorias
    let luciernagas = [];
    for (let i = 0; i < numLuciernagas; i++) {
        // Generar ruta aleatoria
        const rutaAleatoria = generarRutaAleatoria(origen, destino);
        luciernagas.push({
            ruta: rutaAleatoria,
            brillo: calcularDistanciaTotal(rutaAleatoria) // Calcular brillo según la distancia total
        });
    }

    let mejorRuta = null;
    let distanciaMejorRuta = Infinity;
    let iteracion = 0;

    // Bucle principal del algoritmo
    while (iteracion < maxIteraciones) {
        // Actualizar la posición de cada luciérnaga
        for (let i = 0; i < luciernagas.length; i++) {
            const luciernagaActual = luciernagas[i];

            // Actualizar la posición de la luciérnaga según la estrategia de movimiento
            const nuevaRuta = moverLuciernaga(luciernagaActual.ruta);
            const nuevaDistancia = calcularDistanciaTotal(nuevaRuta);

            // Si la nueva ruta es mejor, actualizar la posición de la luciérnaga
            if (nuevaDistancia < luciernagaActual.brillo) {
                luciernagaActual.ruta = nuevaRuta;
                luciernagaActual.brillo = nuevaDistancia;
            }

            // Si encontramos una ruta mejor, actualizar la mejor ruta
            if (nuevaDistancia < distanciaMejorRuta) {
                mejorRuta = nuevaRuta;
                distanciaMejorRuta = nuevaDistancia;
            }
        }

        // Aplicar operadores de actualización global si es necesario
        aplicarActualizacionesGlobales(luciernagas);

        // Incrementar la iteración
        iteracion++;
    }

    return mejorRuta;
}

// Función para generar una ruta aleatoria entre dos ciudades
function generarRutaAleatoria(origen, destino) {
    const ruta = [origen];
    let ciudadActual = origen;
    while (ciudadActual !== destino) {
        const conexiones = grafo[ciudadActual];
        const conexionAleatoria = conexiones[Math.floor(Math.random() * conexiones.length)];
        ciudadActual = conexionAleatoria.destino;
        ruta.push(ciudadActual);
    }
    return ruta;
}

// Función para mover una luciérnaga a una nueva posición (actualizar su ruta)
function moverLuciernaga(rutaActual) {
    const origen = rutaActual[0];
    let ciudadActual = rutaActual[rutaActual.length - 1];
    const conexiones = grafo[ciudadActual];

    // Verificar si hay conexiones disponibles desde la ciudad actual
    if (conexiones && Array.isArray(conexiones) && conexiones.length > 0) {
        // Seleccionar una conexión aleatoria disponible como la siguiente ciudad en la ruta
        const conexionAleatoria = conexiones[Math.floor(Math.random() * conexiones.length)];
        ciudadActual = conexionAleatoria.destino;
        rutaActual.push(ciudadActual);
    } else {
        console.error(`No hay conexiones disponibles desde ${ciudadActual}`);
    }

    return rutaActual;
}




// Función para aplicar operadores de actualización global
function aplicarActualizacionesGlobales(luciernagas) {
    // Aquí no se aplica ninguna actualización global en este ejemplo
}

// Uso del algoritmo para encontrar la mejor ruta
const origen = 'Bogotá';
const destino = 'Baranquilla';
const numLuciernagas = 10;
const maxIteraciones = 100;
const mejorRuta = encontrarMejorRuta(origen, destino, numLuciernagas, maxIteraciones);
console.log('Mejor ruta encontrada:', mejorRuta);
