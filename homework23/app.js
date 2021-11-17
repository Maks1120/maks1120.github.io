// 1. Напишите функцию printNumbers(arr), которая принимает массив чисел и выводит по одному числу из массива в консоль с временным промежутком в одну секунду, после чего вывод останавливается. Сделайте задание с помощью setInterval и рекурсивного setTimeout
// 2. Напишите декоратор debounce(func, timeout), который при многократном вызове функции вызывает её лишь в том случае, если в течение времени timeout вызовов не было
// 3. Напишите декоратор throttle(func, timeout), который при многократном вызове функции вызывает её не чаще, чем раз в timeout.


"use strict";

//1
const firstArray = [1, 2, 3, 4, 5];
function printNumbers(arr) {
    let i = 0;
    const showElem = setInterval(function () {
        console.log(arr[i]);
        if (i === arr.length - 1) {
            clearInterval(showElem);
        }
        i++;
    }, 1000);
}

printNumbers(firstArray);

// 1.2
const secondArray = [1, 2, 3, 4, 5];
function printNumbersOfArray(arr) {
    let i = 0;
    setTimeout(function index() {
        console.log(arr[i]);
        i++;
        if (i === arr.length) return;
        setTimeout(index, 1000);
    }, 6000);
}
printNumbersOfArray(secondArray);


//2
function debounce(func, timeout) {
    let delay;
    return function () {
        const funcCall = () => { func.apply(this, arguments) }
        clearTimeout(delay);
        delay = setTimeout(funcCall, timeout)
    };
}

//3
function throttle(func, timeout) {
    let isThrottle = false;
    let savedArgs;
    let savedThis;
    function wrapper() {
        if (isThrottle) {
            savedArgs = arguments;
            savedThis = this;
    return;
}

func.apply(this, arguments);
    isThrottle = true;
    setTimeout(function () {
        isThrottle = false;
        if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }
    }, timeout);
}
    return wrapper;
}