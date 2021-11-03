// Создайте интерфейс по макету:

// Вверху текстовый инпут, кнопка “Добавить” и кнопка “Удалить”
// Внизу нумерованный список
// При введении текста в инпут и нажатии “+” происходит добавление элемента в конец списка
// При клике на элемент списка - он выделяется изменением его фона.
// При нажатии на “-” выделенный элемент удаляется


const input = document.getElementById('input-field');

const buttonPlus = document.getElementById('plus');

const buttonMinus = document.getElementById('minus');

const olList = document.getElementById('list');



const arr = [];

buttonPlus.addEventListener('click', function () {
    arr.push(input.value);
    input.value = ' ';
    arraySum(arr);
});


buttonMinus.addEventListener('click', function () {
    arr.pop(input.value);
    arraySum(arr);
});

// arr.addEventListener('click', function () {
//     allLI.style.color = 'green'
// })

function arraySum(array) {
    let sum = ' ';
    for (let i = 0; i < array.length; i++) {
        sum += `<li>${array[i]}</li>`;
    }
    olList.innerHTML = sum;
}
arraySum(arr);
   
