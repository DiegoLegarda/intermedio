let a = 15;
let b = 16;
let sum = a + b;
console.log(sum);

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        console.log("operacion invalida");
    }
}

console.log(multiplicacion(a, b));

class Calculadora {
    constructor(num1, num2, res) {
        this.num1 = num1;
        this.num2 = num2;
        this.res = res;
    }
    suma() {
        return this.res = this.num1 + this.num2;
    }
    resta() {
        return this.res = this.num1 - this.num2;
    }
    multiplicacion() {
        return this.res = this.num1 * this.num2;
    }
    division() {
        return this.res = this.num1 / this.num2;
    }
}


//ejemplo de clase animal
class Animal {
    constructor(nombre, edad, raza, vivo) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.vivo = vivo;
    }
    comer() {
        console.log(this.nombre + " está comiendo" + " y tiene " + this.edad + " años");
    }
    dormir() {
        console.log(this.nombre + " está durmiendo" + " y su raza es " + this.raza);
    }
    hablar() {
        console.log(this.nombre + " está hablando");
    }
}

class perro extends Animal {
    constructor(nombre, edad, raza, vivo, tamaño) {
        super(nombre, edad, raza, vivo);
        this.tamaño = tamaño;
    }
    hablar() {
        console.log(this.nombre + " está ladrando");
    }
    correr() {
        console.log(this.nombre + " esta corriendo");
    }
}

class gato extends Animal {
    constructor(nombre, edad, raza, vivo, colorOjos) {
        super(nombre, edad, raza, vivo);
        this.colorOjos = colorOjos;
    }
    hablar() {
        console.log(this.nombre + " está maullando");
    }
    trepar() {
        console.log(this.nombre + " está trepando");
    }
}

let perro1 = new perro("Fido", 3, "Pastor Alemán",true,"mediana");
let perro2=new perro("Beto",4,"Pitbull",true,"grande");
let gato1 = new gato("Mina", 2, "siames",false,"verdes");

perro1.comer();
perro1.dormir();
perro1.hablar();

gato1.comer();
gato1.trepar();
gato1.hablar();

perro1.edad=5;

