
'use strict'
function emptyOrNot(object) {
    for (let key in object) {
        return console.log(false);
    }
    return console.log(true);
}

emptyOrNot();



  
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
//             }
//         }
//     console.log(result);
// }
// onlyNumbers();








