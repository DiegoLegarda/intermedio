class Calculadora {
    constructor(num1, num2, res) {
        this.num1 = num1;
        this.num2 = num2;
        this.res = res;
    }
    suma() {
        this.res = this.num1 + this.num2;
        document.getElementById('resultado').value = this.res;
    }
    resta() {
        this.res = this.num1 - this.num2;
        document.getElementById('resultado').value = this.res;
    }
    multiplicacion() {
        this.res = this.num1 * this.num2;
        document.getElementById('resultado').value = this.res;
    }
    division() {
        this.res = this.num1 / this.num2;
        document.getElementById('resultado').value = this.res;
    }
}

let numero1 = 0;
let numero2 = 0;
let resultado = 0;
let calculadora1 = new Calculadora(numero1, numero2, resultado);

function sumar() {
    calculadora1.num1 = parseFloat(document.getElementById('num1').value);
    calculadora1.num2 = parseFloat(document.getElementById('num2').value);
    calculadora1.suma();
}

function restar() {
    calculadora1.num1 = parseFloat(document.getElementById('num1').value);
    calculadora1.num2 = parseFloat(document.getElementById('num2').value);
    calculadora1.resta();
}

function multiplicar() {
    calculadora1.num1 = parseFloat(document.getElementById('num1').value);
    calculadora1.num2 = parseFloat(document.getElementById('num2').value);
    calculadora1.multiplicacion();
}

function dividir() {
    calculadora1.num1 = parseFloat(document.getElementById('num1').value);
    calculadora1.num2 = parseFloat(document.getElementById('num2').value);
    if(calculadora1.num2!=0){
    calculadora1.division();
    }
    else{
        alert("No se puede dividir entre cero");
    }
}
document.getElementById('sumar').addEventListener('click', sumar);
document.getElementById('restar').addEventListener('click', restar);
document.getElementById('multiplicar').addEventListener('click', multiplicar);
document.getElementById('dividir').addEventListener('click', dividir);

