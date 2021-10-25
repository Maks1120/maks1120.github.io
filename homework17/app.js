// Выберите section с id “container” без метода querySelector и с ним.
// Выберите все li с классом "second".
// Выберите li с классом "third" внутри ol .
// Поместите текст “Hello” в элемент с классом “header”.
// Добавьте класс “main” элементу с классом “footer”, а затем уберите его.
// Создайте новый элемент li, затем добавьте в него текст "four".
// Поместите li в элемент ul.
// Сделайте зелёный фон всем li внутри ol.
// Удалите div с классом “footer”.

// 1
const byId = document.getElementById('container');
console.log(byId);

const byQuerySelector = document.querySelector('#container');
console.log(byQuerySelector);

// 2 
const allLiSecond = document.querySelectorAll('.second');
console.log(allLiSecond);


// 3 
const liThirdInOl = document.querySelector('ol .third');
console.log(liThirdInOl);


// 4
const withHeader = document.querySelector('.header');

withHeader.textContent = 'Hello';

console.log(withHeader.textContent);


// 5
const elemFooter = document.querySelector('.footer');

elemFooter.classList.add('main');
const elemFooterClassNames = elemFooter.className;
console.log(elemFooterClassNames);

elemFooter.classList.remove('main');
const delElemFooterClassName = elemFooter.className;
console.log(delElemFooterClassName);


// 6
const newLiElem = document.createElement('li');
newLiElem.classList.add('four');
newLiElem.textContent = 'four';
console.log(newLiElem);


// 7
const elemLiThird = document.querySelector('.third');
console.log(elemLiThird);
elemLiThird.after(newLiElem);

const liCollections = document.getElementsByTagName('li');
console.log(liCollections);


// 8
const liOfOl = document.querySelector('ol');
const liElemsGreen = liOfOl.querySelectorAll('li');
for (let green of liElemsGreen) {
    green.style.backgroundColor = 'green';
}
console.log(liElemsGreen);


// 9
const delFooter = document.querySelector('.footer');
delFooter.remove();
console.log(delFooter);