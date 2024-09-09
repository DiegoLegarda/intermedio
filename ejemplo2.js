//ejemplo de clase vehículo con subclases automovil y bicicleta con java script

class Vehiculo {
    constructor(marca, modelo, año, color) {
        if (!marca || !modelo || isNaN(año) || !color) {
            throw new Error('Todos los campos deben ser válidos.');
        }
        this._marca = marca; 
        this._modelo = modelo;
        this._año = año;
        this._color = color;
    }

    imprimirDetalles() {
        console.log(`Marca: ${this._marca}`);
        console.log(`Modelo: ${this._modelo}`);
        console.log(`Año: ${this._año}`);
        console.log(`Color: ${this._color}`);
    }

    static compararAños(vehiculo1, vehiculo2) {
        return vehiculo1 - vehiculo2;
    }

    acelerar() {
        console.log('El vehículo está acelerando...');
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, velocidad, combustible) {
        super(marca, modelo, año, color);
        this._velocidad = velocidad;
        this._combustible = combustible;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Velocidad: ${this._velocidad} km/h`);
        console.log(`Combustible: ${this._combustible}`);
    }

    acelerar() {
        console.log('El automóvil está acelerando...');
    }

    reabastecer(combustible) {
        console.log(`Reabasteciendo el automóvil con ${combustible} litros de combustible.`);
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo, año, color, tipo, tieneCampana) {
        super(marca, modelo, año, color);
        this._tipo = tipo;
        this._tieneCampana = tieneCampana;
    }

    imprimirDetalles() {
        super.imprimirDetalles();
        console.log(`Tipo: ${this._tipo}`);
        console.log(`Tiene campana: ${this._tieneCampana ? 'Sí' : 'No'}`);
    }

    acelerar() {
        console.log('La bicicleta está acelerando...');
    }

    tocarCampana() {
        if (this._tieneCampana) {
            console.log('¡Ring Ring! La bicicleta tiene campana.');
        } else {
            console.log('Esta bicicleta no tiene campana.');
        }
    }
}

// Ejemplos de uso
const auto = new Automovil('Toyota', 'Corolla', 2020, 'Rojo', 180, 'Gasolina');
const bici = new Bicicleta('Trek', 'FX 3', 2022, 'Negro', 'Híbrida', true);

auto.imprimirDetalles();
auto.acelerar();
auto.reabastecer(50);

bici.imprimirDetalles();
bici.acelerar();
bici.tocarCampana();

// Comparar años de los vehículos
console.log(`Comparación de años: ${Vehiculo.compararAños(auto._año, bici._año)}`);


