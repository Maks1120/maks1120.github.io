// Сверстайте произвольную таблицу на 3-5 колонок и 10-20 строк.

// Напишите функцию sortTable(columnIndex). При передаче в sortTable номера колонки, таблица должна отсортироваться по возрастанию по указанной колонке.

// Бонус №1:
// Если колонка уже была отсортирована - порядок сортировки меняется на убывание. В третий раз - сортировка отменяется. В хедере колонки должен отображаться маркер, отображающий порядок сортировки.

// Бонус №2:
// При вызове с последующими индексами должна осуществляться многоуровневая сортировка: при клике на другую колонку - сортировка не сбрасывается, а добавляется новым уровнем. Механика, добавленная в бонусе №1, должна оставаться рабочей.


// const columnName = table.rows[0].cells[0].innerHTML;
// const columnSurname = table.rows[0].cells[1].innerHTML;
// const columnAge = table.rows[0].cells[2].innerHTML;

// 1. Получить таблицу
// 2. Получить колонки таблицы (th)
// 3. Получить ячейки таблицы ()tr
// 4. Создать функцию sortTable которая принимает (columnIndex)
    // 4.1. Получить индекс колонок таблицы (th)
    // 4.2. Получить 



const table = document.querySelector('table');
console.log(table);

const headings = [...table.querySelectorAll('th')];
console.log(headings)

const rows = [...table.querySelectorAll('tr:not(:first-child)')]
console.log(rows)

function sortTable(columnIndex) {
    const index = headings.findIndex((elem) => {
        return elem.textContent === columnIndex;
    });

    const sorting = rows
        .map((row) => row.children[index].innerHTML)
        .sort((a,b) => {
            return a < b ? -1 : 1;
        })
    return sorting;
}
console.log(sortTable('Surname'));

























      // console.log(arr)

// arr = arr.slice(1);
// arr.sort((a, b) => {
    // let str = a.cells[0].textContent;
    // let str2 = b.cells[0].textContent;
    // return str.localeCompare(str2);
//     console.log(str)
// });

// table.tBodies[0].append(...arr);