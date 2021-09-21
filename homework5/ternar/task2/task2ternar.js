const age = prompt('Подтвердите свой возраст!', ' ');

const result = (age > 30) ? 'Здравствуйте' :
               (age >=18) ? 'Привет друг!' : 'Отказано в доступе!'

alert(result)