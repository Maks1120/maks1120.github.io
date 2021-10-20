// Создайте функцию capitalize(string), которая принимает строку со словами через пробел и заменяет первую букву каждого слова на заглавную
// 'use strict'



function capitalize(string) {
    return string
        .split(' ')
        .map(function(elem) {
            return elem[0].toUpperCase() + elem.substr(1);
            })
        .join(' ');
};
console.log(capitalize('some text for capitalize'));





// Напишите функцию checkSubstring(string, substring), которая проверяет наличие подстроки substring в строке string. Проверка должна быть нечувствительна к регистру.



function checkSubstring(string, substring) {
    string = 'Hello my friend';
    substring = 'my';
    return string.includes(substring);
}
console.log(checkSubstring());