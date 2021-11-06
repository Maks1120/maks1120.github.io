// Сверстайте произвольную таблицу на 3-5 колонок и 10-20 строк.

// Напишите функцию sortTable(columnIndex). При передаче в sortTable номера колонки, таблица должна отсортироваться по возрастанию по указанной колонке.

// Бонус №1:
// Если колонка уже была отсортирована - порядок сортировки меняется на убывание. В третий раз - сортировка отменяется. В хедере колонки должен отображаться маркер, отображающий порядок сортировки.

// Бонус №2:
// При вызове с последующими индексами должна осуществляться многоуровневая сортировка: при клике на другую колонку - сортировка не сбрасывается, а добавляется новым уровнем. Механика, добавленная в бонусе №1, должна оставаться рабочей.

"use strict";

const table = document.querySelector('table');

const rows = [...table.querySelectorAll('tbody tr')];

const array = rows.map((elem) => {
    return [...elem.querySelectorAll('td')].map((td) => {
        return (!isNaN(td.textContent)) ? +td.textContent : td.textContent;
    });
});

const tableHTML = array.map((row) => {
    const content = row.map((elemRow) => {
        return `<td>${elemRow}</td>`;
    }).join(' ');
    return `<tr>${content}</tr>`;
}).join(' ');

const tableBody = table.querySelector('tbody');

tableBody.innerHTML = tableHTML;

function sortTable(columnIndex) {
    const sortedArray = array.sort((a, b) => a[columnIndex] < b[columnIndex] ? -1 : 1);
    const sortedTableHTML = sortedArray.map((row) => {
        const content = row.map((elemRow) => {
            return `<td>${elemRow}</td>`;
        }).join(' ');
        return `<tr>${content}</tr>`;
    }).join(' ');
    tableBody.innerHTML = sortedTableHTML;
}

