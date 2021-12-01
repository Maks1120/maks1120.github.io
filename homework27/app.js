// Пользуясь сервисом async-demo, отправьте следующие серии запросов. Не забудьте про обработку ошибок!

// Получите случайное число от 1 до 20 с вероятностью ошибки 50%. В случае ошибки - выведите её в консоль. В случае удачного запроса - повторите в консоли строку “Hello World” равное полученному числу раз.
// Создайте на сервере объект {firstName: ‘Vasya’, lastName: ‘Ivanov’}. Сразу после создания, расширьте его полем {age: 33}. Удалите объект после расширения. Все запросы должны быть отправл ены с вероятностью ошибки 20%.


// Бонус (10 баллов):

// Создайте три пользователя с произвольными именами и фамилиями. 
// Получите три случайных числа от 1 до 100 с сервера и добавьте их созданным пользователям в качестве возраста. 
// Получите случайное число от 1 до 3. 
// Удалите всех пользователей, кроме пользователя с порядковым номером, равным случайно полученному числу. 
// Все операции выполняйте с вероятностью ошибки 5%.
// https://async-demo.herokuapp.com/objects/stable?maxRandom=10

// 1
const xhr = new XMLHttpRequest();

xhr.open('GET', '/unstable?maxRandom=20&prob=50');

xhr.send();

xhr.addEventListener ('load', () => {
    if (xhr.status !== 200) {
        console.error(xhr.response);
    } else {
        console.log('hello world' + ''.repeat(5));
    }

    // 2
    const xhr1 = new XMLHttpRequest();

    xhr1.open('POST', '/objects');

    xhr1.send({firstName: 'Vasya', lastName: 'Ivanov'});

    xhr1.addEventListener ('load', () => {
            console.error(xhr1.status);
            console.log(xhr1.response);
    });
});


