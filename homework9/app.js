let randomNumber = Math.floor(Math.random() * 100) + 1;
alert(randomNumber);
let newGame
while (true) {
    let userNumber = +prompt('Введите число от 1 до 100')
    if (userNumber === randomNumber) {
        alert('Поздравляем, Вы угадали число');
        newGame = confirm('Хотите сыграть еще раз?'); {
            if (newGame) {
                randomNumber = Math.floor(Math.random() * 100) + 1;
                alert(randomNumber)
            } else if (!newGame) break;
        }
    } else if (userNumber > randomNumber) {
        alert('Многовато');
    } else if (userNumber < randomNumber) {
        alert('Маловато');
    } else {
        alert('Ошибка, введите число от 1 до 100');
    }
}

