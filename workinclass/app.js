// pflfxrf 1
// const mulNum = [2,4];
// const mul = mulNum.reduce((result, elem) => result * elem, 1);
// console.log(mul);




// Задачи c DOM
// Напишите функцию isPresentInDOM(elem), которая возвращает true, если элемент присутствует в DOM и false, если нет.

// 'use strict'
// const elem = document.querySelector('#emptyOrNot');
// function isPresentDOM(elem) {
//     return elem.matches('#emptyOrNot');;
// }

// console.log(isPresentDOM(elem));


// Напишите функцию renderList(elem, items), которая принимает элемент elem и массив строк items. Функция должна создать ненумерованный список внутри элемента elem и отобразить каждое значение массива в отдельном <li>
// function renderList(elem, items) {

// }


// Напишите скрипт, который будет выделять строку в таблице другим цветом по клику.

// function onClick() {
    // const tableStyle = document.querySelector('#table');
    
    // const columnTdStyle = Array.from(tableStyle.querySelectorAll('td'));

    // for (let allTh of columnTdStyle) {
    //     if (addEventListener('click', allTh[0])) {
    //         allTh.style.backgroundColor = 'green';
    //     }
    // }
// }
// onClick()

// function onClick() {
//     alert('alert')
// }
// const button = document.querySelector('.btn');
// columnTdStyle.addEventListener('click', onClick);



// Вам дана таблица. Напишите функцию getColumnSum(columnHeading), которая принимает заголовок колонки и возвращает сумму чисел в колонке.

// const table = document.querySelector('table');
// console.log(table);

// const headings = [...table.querySelectorAll('th')];
// console.log(headings);

// const rows = [...table.querySelectorAll('tr:not(:first-child)')];
// console.log(rows);


// function getColumnSum(heading) {
//     const index = headings.findIndex((elem) => {
//         return elem.textContent === heading;
//     });

//     const values = rows
//         .map((row) => +row.children[index].innerHTML).sort((a,b) => {
//             return a < b ? -1 : 1;
//         })
//     return values;
// };

// console.log(getColumnSum('column2'));


// let y = 1;
// let x = y = 2;
// alert(x);



// let date = new Date();
// let date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
let date = new Date(seconds);
alert( date.getHours() );