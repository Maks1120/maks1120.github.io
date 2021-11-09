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
let activeIndex;

buttonPlus.addEventListener('click', function () {
    if (!input.value) return;
    
    arr.push(input.value);
    
    input.value = ' ';
    
    renderList(arr);
});


buttonMinus.addEventListener('click', function () {
    arr.splice(activeIndex, 1);
    
    activeIndex = undefined;
    
    renderList(arr);
});


olList.addEventListener('click', onClickLi);

function onClickLi(event) {
    const child = event.target.closest('li');
    
    if (!child) return;
    
    const index = +child.dataset.index;
    
    activeIndex = index;
    
    renderList(arr);
}


function renderList(array) {
    let htmlString = ' ';
        
        for (let i = 0; i < array.length; i++) {
            htmlString += `<li data-index="${i}" 
            ${activeIndex === i ? 'class="bg-color"' : ''}> ${array[i]} </li>`;
        }
    
    olList.innerHTML = htmlString;
}
renderList(arr);