// Расширьте тип данных String методом reverse(), который возвращает строку с обратным порядком символов
// Модифицируйте метод массива sort таким образом, чтобы он стал немутирующим.
// Добавьте к коллекции, возвращаемой методом querySelectorAll методы массива map, reduce и find


// 1.
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}
console.log('1,2,3,4,5'.reverse());

// 2
Array.prototype.notMutableSorting = Array.prototype.sort;

Array.prototype.sort = function (func) {
    return [...this].notMutable(func);
}


// 3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;

