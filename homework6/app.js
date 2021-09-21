const login = prompt('Введите логин', 'login')
let password = prompt('Введите пароль', 'password')


if (login === 'admin' && password === 'test') {
    alert('Добро пожаловать!')
} else if (login !== 'admin' && password === 'test') {
    alert('Неверный логин!')
} else if (login === 'admin' && password !== 'test') {
        while (password !== 'test') {
        password = prompt('Неверный пароль, попробуйте еще раз!')
        alert('Добро пожаловать!')
        if (password === null) break
    }  
} else {
    alert('Неверный логин и пароль!')
}