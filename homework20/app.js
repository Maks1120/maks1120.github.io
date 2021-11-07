// 1. Напишите вывод числа Фибоначчи по порядковому номеру двумя способами: рекурсией и циклом
// 2. Напишите функцию, которая считает факториал числа рекурсивно и циклом

function seriesFib(num) {
    let a = 1;
    let b = 1;
        for (let i = 3; i <= num; i++) {
            let c = a + b;
            a = b;
            b = c;
        };
    return b;
};
  
console.log(seriesFib(3));


function seriesFibonacci(number) {
    if (number <= 1) {
        return number;
    } else {
        return seriesFibonacci(number - 1) + seriesFibonacci(number - 2);
    };
};

console.log(seriesFibonacci(3));




function factorial(facNumber) {
    if (facNumber != 1) {
        return facNumber * factorial(facNumber - 1);
    } else {
        return 1;
    };
};

console.log(factorial(5));



function factorialize(num) {
    let result = num;
        if (num === 0 || num === 1) {
            return 1;
        };

        while (num > 1) {
            num--;
            result = num * result;
        };
    return result;
};
  
console.log(factorialize(5));