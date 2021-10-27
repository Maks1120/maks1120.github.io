// 1. Напишите функцию, которая принимает массив с числами, возвращает их сумму. Решите задачу двумя способами: с помощью цикла и с помощью метода reduce


// Method CYCLE
const arr = [2,2];
    function arraySum(arr) {
        let sum = 0;
        for(let array of arr) {
            sum += array;
        };
        return sum;
    };
console.log(arraySum(arr));


// Method REDUCE
const arrSum = [2,4];
function sumReduce(arrSum) {
    const sum = arrSum.reduce((result, elem) => result + elem, 0);
    return sum;
}
console.log(sumReduce(arrSum));



// 2. Напишите функцию mapToUpperCase(arr), которая принимает массив строк, а возвращает новый массив строк в верхнем регистре. Решите задачу с помощью цикла и метода map


// Method CYCLE 1.1.
let toUpperCase = ['Soccer', 'Tennis', 'Volleyball'];
    function lettersToUpperCase(toUpperCase) {
        let upp = [];
        for(let i = 0; i < toUpperCase.length; i++) {
            upp.push(toUpperCase[i].toUpperCase());
        }
        return upp;
    }
console.log(lettersToUpperCase(toUpperCase));



// Method MAP

let foods = ['Bread', 'Milk', 'Tomatos']
function toUpperCaseMap(foods) {
    const mapToUpperCase = foods.map( arr => {
        return arr.toUpperCase();
    });
    return mapToUpperCase;
}

console.log(toUpperCaseMap(foods));








