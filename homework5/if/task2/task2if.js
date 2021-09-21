const age = prompt('Подтвердите свой возраст!', ' ');

if (age > 30) {
    alert('Здравствуйте.');
} else if (age < 18) {
    alert('Отказано в доступе!');
} else if (age >= 18) {
    alert('Привет друг!'); 
}

 