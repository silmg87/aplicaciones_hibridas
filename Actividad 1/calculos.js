// Sumar
function sumar(num1, num2) {
    return num1 + num2;
}

// Dividir
function dividir(num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por en número 0 (cero).";
    }
    return num1 / num2;
}

// Array y su mayor valor
function numMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
      }
    }
    return mayor;
}

// Resultados 
const resultado1 = sumar(5, 10);
console.log(resultado1);

const resultado2 = dividir(20, 2);
console.log(resultado2);

const arrayNum = [2, 8, 9, 7, 5, 6];
const valMayor = numMayor(arrayNum); 
console.log(valMayor); 
