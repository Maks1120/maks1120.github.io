const login = prompt('Введите логин', 'login')
let password = prompt('Введите пароль', 'password')


if (login === 'admin' && password === 'test') {
    alert('Добро пожаловать!')
} else if (login !== 'admin' && password === 'test') {
    alert('Неверный логин!')
} else if (login === 'admin' && password !== 'test') {
        while (password !== 'test') {
        password = prompt('Неверный пароль, попробуйте еще раз!')
        if (password === null) break
    } if (password === 'test') {
        alert('Добро пожаловать!')
    } 
} else {
    alert('Неверный логин и пароль!')
}