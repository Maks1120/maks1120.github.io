// 1. Напишите функцию, которая принимает массив с числами, возвращает их сумму. Решите задачу двумя способами: с помощью цикла и с помощью метода reduce

// Method CYCLE 1.1
// const arr = [2,2];
//     function arraySum(array) {
//         let sum = 0;
//         for(let i = 0; i < array.length; i++) {
//             sum += array[i];
//         };
//     console.log(sum);
//     };
// arraySum(arr);
// Method CYCLE 1.2
const arr = [2,2];
    function arraySum(arr) {
        let sum = 0;
        for(let array of arr) {
            sum += array;
        };
    console.log(sum);
    };
arraySum(arr);


// Method REDUCE
    const arrSum = [2,4];
    const sum = arrSum.reduce((result, elem) => result + elem, 0);
    console.log(sum);




// 2. Напишите функцию mapToUpperCase(arr), которая принимает массив строк, а возвращает новый массив строк в верхнем регистре. Решите задачу с помощью цикла и метода map


// Method CYCLE 1.1.
let toUpperCase = ['Soccer', 'Tennis', 'Volleyball'];
    function lettersToUpperCase(toUpperCase) {
        let upp = [];
        for(let i = 0; i < toUpperCase.length; i++) {
            upp.push(toUpperCase[i].toUpperCase());
        }
    console.log(upp);
    }
lettersToUpperCase(toUpperCase);

// Method CYCLE 1.2. (не пойму почему не возвращает массив строк)
// let toUpperCase = ['Soccer', 'Tennis', 'Volleyball'];
//     function lettersToUpperCase(toUpperCase) {
//         let upp = [];
//         for (let upper of toUpperCase) {
//             upp = upper.toUpperCase();
//             console.log(upp);
//         }
//     }
// lettersToUpperCase(toUpperCase);


// Method MAP
let foods = ['Bread', 'Milk', 'Tomatos']

const mapToUpperCase = foods.map( arr => {
    return arr.toUpperCase()
});
console.log(mapToUpperCase);








