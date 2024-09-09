//ejemplo de composición para un automovil con las clases, motor, ruedas, carroceria con java script
class Automovil {
    constructor(motor, ruedas, carroceria) {
        // Se puede pasar objetos específicos de Motor, Ruedas y Carroceria o crear objetos por defecto
        this.motor = motor || new Motor();
        this.ruedas = ruedas || new Rueda();
        this.carroceria = carroceria || new Carroceria();
    }

    arrancar() {
        console.log('Arrancando el automóvil...');
        this.motor.arrancar();
    }

    apagar() {
        console.log('Apagando el automóvil...');
        this.motor.apagar();
    }

    inflarRuedas() {
        this.ruedas.inflar();
    }

    pintarCarroceria(color) {
        this.carroceria.pintar(color);
    }

    repararAuto(taller) {
        console.log('Llevando el automóvil al taller...');
        this.carroceria.reparar(taller);
    }
}

class Motor {
    cilindrada;
    potencia;
    torque;

    constructor(cilindrada, potencia, torque) {
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.torque = torque;
    }

    arrancar() {
        console.log('El motor ha arrancado con potencia de ' + this.potencia + ' CV');
    }

    apagar() {
        console.log('El motor ha parado');
    }
}

class Rueda {
    tamaño;
    ancho;
    presión;
    presiónMaxima=3;

    constructor(tamaño, ancho, presión) {
        this.tamaño = tamaño;
        this.ancho = ancho;
        this.presión = presión;
    }

    inflar() {
        if (this.presión < this.presiónMaxima) {
            this.presión += 0.5;
            console.log(`Las ruedas han sido infladas a ${this.presión} bar`);
        } else {
            console.log('No se puede inflar más, la presión ya está en su límite máximo.');
        }
    }

    desinflar() {
        if (this.presión > 0) {
            this.presión -= 0.5;
            console.log(`Las ruedas han sido desinfladas a ${this.presión} bar`);
        } else {
            console.log('Las ruedas ya están completamente desinfladas.');
        }
    }
}

class Carroceria {
    material;
    color;
    forma;

    constructor(material, color , forma ) {
        this.material = material;
        this.color = color;
        this.forma = forma;
    }

    pintar(color) {
        this.color = color;
        console.log('La carrocería ha sido pintada de ' + color);
    }

    reparar(taller) {
        console.log(`El auto se lleva a reparar al taller ${taller}`);
    }
}

// Ejemplo de uso
let sedan = new Carroceria("Metal", "Rojo", "Sedan");
sedan.pintar("Azul");
sedan.reparar("Taller de Juan");
let rueda1 = new Rueda(50, 20, 2);
let rueda2 = new Rueda(50, 20, 3);
let rueda3 = new Rueda(50, 20, 2);
let rueda4 = new Rueda(50, 20, 2);

rueda1.inflar();
rueda2.inflar();

let motor = new Motor(1200, 80, 150); 

let nuevoautomovil = new Automovil(motor, [rueda1, rueda2, rueda3, rueda4], sedan);
nuevoautomovil.repararAuto("Taller de Pedro");

