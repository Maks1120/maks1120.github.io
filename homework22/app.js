// 1. Создайте функцию createRangeFilter(min, max), которая возвращает функцию filter(num). Функция должна возвращать true для значений, которые входят в интевал и false для значений, которые не входят. Пример: [1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4)) -> [2, 3, 4]

// 2. Создайте функцию createKeyBy(propName), которая возвращает функцию keyBy(arr). Функция keyBy должна группировать массив по свойству propName объектов массива.

// 3. Создайте функцию createCalcPercent(percent), которая возвращает функцию calcPercent(value). Функция calcPercent должна считать percent процентов от value.



// 1
const arr = [1,2,3,4,5,6]

function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    }
}

console.log(arr.filter(createRangeFilter(2,4)));

// 2



function createKeyBy(propName) {
    return function keyBy(arr) {
        return arr.reduce((sortByKey, elem) => {
            if (!sortByKey[elem[propName]]) {
                sortByKey[elem[propName]] = [];
            }
                sortByKey[elem[propName]].push(elem);
                return sortByKey;
        }, {});
    };
}

console.log(createKeyBy('name')([
    {name: 'Vasya', surname: 'Ivanov'},
    {name: 'Vanya', surname: 'Ivanov'},
    {name: 'Albert', surname: 'Vasyliev'},
    {name: 'Maks', surname: 'Sklyar'}
]))



// 3
function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value / 100 * percent;
    }
}

console.log(createCalcPercent(50)(50));