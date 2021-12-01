
// 1. Создайте функцию, которая будет возвращать true для пустого объекта ({}) и false для любого, в котором есть хотя бы одной свойство.





'use strict'
function emptyOrNot(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

console.log(emptyOrNot());





// 2 задача, ВАРИАНТ 1
function onlyNumbers() {
    let object = {
        '0': 'zero', 
        '42': 'answer', 
        'greeting': 'Hello',
        '3.14': 'PI',
        '55': 'age'
    };

    for (let key in object) {
        if (+key || +key === 0) {
        console.log(object[key]);
        };
    };
};
onlyNumbers();



// 2 задача, ВАРИАНТ 2
// function onlyNumbers() {
//     let user = {
//         '0': 'zero', 
//         '42': 'answer', 
//         'greeting': 'Hello',
//         '3.14': 'PI', 
//         '55': 'age'
//     };

//     let result = [];
//         for (key in user) {
//             if (!isNaN(+key)) {
//                 result.push(user[key]);
//             };
//         };
//     console.log(result);
// }
// onlyNumbers();








