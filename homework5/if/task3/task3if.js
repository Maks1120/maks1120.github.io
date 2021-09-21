const drink = prompt('Чай или кофе?')
const tea = ('чай')
const coffee = ('кофе')


if (drink === tea) {
    const teaWithSugar = prompt('С сахаром?', ' '); {
    } if (teaWithSugar === 'да') {
        alert('Ваш чай с сахаром!');
    } else {
        alert('Ваш чай без сахара');
    }
} else if (drink === coffee) {
    const coffeeWithSugar = prompt('С сахаром?', ' '); {
    } if (coffeeWithSugar === 'да') {
        alert('Ваш кофе с сахаром!');
    } else {
        alert('Ваш кофе без сахара');
    }
} else {
    alert('Перезагрузиет страницу, и выберите напиток еще раз!')
}