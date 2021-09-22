const age = prompt('Подтвердите свой возраст!', ' ');
let ageGreeting;

if (age > 30) {
    ageGreeting = 'Здравствуйте.';
} else if (age < 18) {
    ageGreeting = 'Отказано в доступе!';
} else if (age >= 18) {
    ageGreeting = 'Привет друг!'; 
}

alert(ageGreeting)