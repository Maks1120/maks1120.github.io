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










// while (true) {
//     if (userNumber > randomNumber)  {
//         big = alert('Многовато');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } else if (userNumber < randomNumber) {
//         small = alert('Мало');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } else if (userNumber = randomNumber) {
//         winUserNumber = confirm('Winner');
//     } else {
//         alert('Победа')
//         break
//     }
// }






// while (userNumber) {
//     if (userNumber > randomNumber) {
//         big = alert('Многовато');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } else if (userNumber < randomNumber) {
//         small = alert('Мало');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } 
// }

// if (userNumber = randomNumber) {
//         winUserNumber = confirm('Поздравляем, Вы угадали число, хотите сыграть еще раз?')
//         userNumber
//         if(!userNumber)break;
// } 






// while (userNumber) {
//     if (userNumber > randomNumber) {
//         big = alert('Многовато');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } else if (userNumber < randomNumber) {
//         small = alert('Мало');
//         userNumber = prompt('Введите число от 1 до 100!');
//     } 
// }


// while (password !== 'test') {
//     password = prompt('Неверный пароль, попробуйте еще раз!')
//     if (password === null) break
// } if (password === 'test') {
//     alert('Добро пожаловать!')
// } 