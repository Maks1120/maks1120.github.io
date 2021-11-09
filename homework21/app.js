// Напишите функцию, которая принимает объект с произвольным уровнем вложенности, а возвращает его глубокую копию.

// Бонус:

// Функция должна корректно работать как с обычными объектами, так и с массивами (в которых могут быть вложены объекты).


const obj = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 27,
    workedIn: { 
        2018: 'Epam',
        2019: 'NIX'
    },
    hobby: ['Football', 'Music']
}

function copyObj(obj) {
    let newObj = {};
    newObj = Array.isArray(obj) ? [] : {};
        for (let prop in obj) {
            if (typeof obj[prop] === "object") {
                newObj[prop] = copyObj(obj[prop]); 
            } else {
                newObj[prop] = obj[prop]; 
            }
        }
    return newObj;
}
console.log(copyObj(obj))
