// 1.- Siempre hambriento
// Escribe una función a la que se le asigne un arreglo, y cada vez que el valor sea "comida" debería mostrar "delicioso"en la consola. Si "comida" no estaba presente en el arreglo, que la consola registre "Tengo hambre" una vez.

function siempreHambriento(arr) {
    for(let index = 0; index < arr.length; index++){
        // Verifica si el elemento en la posicion dada, contiene la palabra comida
        if(arr[index] === 'comida'){
            console.log('Delicioso')
        }else if(index === arr.length - 1){// caso contrario, evalua si ha llegado a la ultima posicion del arrego y no se ha encontrado la palabra comiida
            console.log('Tengo hambre')
        }
    }
};

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([2, 1, 5, 7, 8]);

console.log()
console.log("*********");

// 2.- Dado un arreglo y un valor cutoff, devuelve un nuevo arreglo que contenga solo los valores mayores a cutoff.

function highPass(arr, cutoff){
    let filteredArr = [];

    for(let num of arr){
        if(num > cutoff){
            filteredArr.push(num)
        }
    }
    return filteredArr.sort((a,b) => a - b );
};

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(`Numeros mayores a cutoff: ${result}`)

console.log()
console.log("*********");


// Mejor que el promedio
// Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.


function betterThanAverage(arr){
    let average = arr.reduce((acc,curr) => acc + curr,0) / arr.length;
    
    let acumulador = 0;

    for(let index = 0; index < arr.length; index++){
        if(arr[index] > average){
            
            acumulador++
        }
    }
    return acumulador;
};

let resultAverage = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);

console.log(`Números mayores al promedio: ${resultAverage}`);

console.log()
console.log("*********");

// Arreglo invertido
// Escribe una función que invierta los valores de un arreglo y los devuelva

function reverse(arr) {
    // tu código aquí
    return arr.reverse();
}
let reverseResult = reverse(["a", "b", "c", "d", "e"]);
console.log('Arreglo invertido: ', reverseResult);

console.log()
console.log("*********");

// Arreglo de Fibonacci
// Los números de Fibonacci se han estudiado durante años y aparecen a menudo en la naturaleza. Escribe una función que devuelva un arreglo de números de Fibonacci hasta una longitud dada n. Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia. Entonces, si el cuarto valor es 2 y el quinto valor es 3 entonces el siguiente valor en la secuencia es 5.

function fibonacciArray(n) {
    // Arreglo con posición 0 y 1
    let fibArr = [ 0, 1 ];

    for(let num = 2; num <= n; num++){
        // Suma última posición y penúltima posición
        let nextFib = fibArr[num - 1] + fibArr[num - 2];
        // Se agrega la suma de las dos últimas posiciones al arreglo recursivamente.
        fibArr.push(nextFib)
    }

    return fibArr;
}
const resultFibonacci = fibonacciArray(10);
console.log(resultFibonacci);
