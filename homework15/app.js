// Напишите функцию keyBy(arr, key), которая принимает массив объектов, а возвращает объект, сгруппированный по ключу key.
'use strict'

const arr = [
        {name: 'Vasya', surname: 'Ivanov'},
        {name: 'Vanya', surname: 'Ivanov'},
        {name: 'Albert', surname: 'Vasyliev'}
    ];


function keyBy(arr, key) {
    const newArr = arr.reduce((newArr, elem) => {
      if (!newArr[elem[key]]) {
        newArr[elem[key]] = [];
      }
      newArr[elem[key]].push(elem);
      return newArr;
    }, {});
    return newArr;
}

console.log(keyBy(arr, 'name'));
