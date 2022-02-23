// Пользуясь сервисом async-demo, отправьте следующие серии запросов. Не забудьте про обработку ошибок!

// Получите случайное число от 1 до 20 с вероятностью ошибки 50%. В случае ошибки - выведите её в консоль. В случае удачного запроса - повторите в консоли строку “Hello World” равное полученному числу раз.
// Создайте на сервере объект {firstName: ‘Vasya’, lastName: ‘Ivanov’}. Сразу после создания, расширьте его полем {age: 33}. Удалите объект после расширения. Все запросы должны быть отправлены с вероятностью ошибки 20%.


// Бонус (10 баллов):

// Создайте три пользователя с произвольными именами и фамилиями. 
// Получите три случайных числа от 1 до 100 с сервера и добавьте их созданным пользователям в качестве возраста. 
// Получите случайное число от 1 до 3. 
// Удалите всех пользователей, кроме пользователя с порядковым номером, равным случайно полученному числу. 
// Все операции выполняйте с вероятностью ошибки 5%.
// https://async-demo.herokuapp.com/objects/

// 1
// const xhr = new XMLHttpRequest();

// xhr.open('GET', '/unstable?maxRandom=20&prob=50');

// xhr.send();

// xhr.addEventListener ('load', () => {
//     if (xhr.status !== 200) {
//         console.error(xhr.response);
//     } else {
//         console.log(' Hello world! '.repeat(xhr.response));
//     }
// });





// 2
const addUser = new XMLHttpRequest();

addUser.open('POST', 'https://async-demo.herokuapp.com/objects');

const newUser = JSON.stringify({firstName: 'Vasya', lastName: 'Ivanov'});

addUser.send(newUser);

addUser.addEventListener ('load', () => {
    if (addUser.status !==200) {
        console.log(addUser.status);
        console.log(addUser.response);
        return;
    }   
});

const userId = JSON.parse(addUser.response)
console.log(userId);



























// const addAge = new XMLHttpRequest();

// addAge.open('PATCH', 'https://async-demo.herokuapp.com/objects/${6.id}');

// const age = JSON.stringify({age: 33});

// addAge.send(age);

// addAge.addEventListener ('load', () => {
//     if (addAge.status !==200) {
//         console.log(addAge.response);
//         return;
//     }   
// });




// const xhr = new XMLHttpRequest();

// xhr.open('POST', 'https://async-demo.herokuapp.com/objects');

// xhr.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');



// xhr.send(addUser);

// xhr.addEventListener ('load', () => {
//     if (xhr.status !== 201) {
//         console.error(xhr.response);
//         return;    
//     }
    
//     try {
//         const received = JSON.parse(xhr.response);
//         console.log(received);
//     } catch {
//         console.error(err);
//     }
// });
















// const requestURL = 'https://async-demo.herokuapp.com/objects'

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()

//     xhr.open(method, url)

//     xhr.responseType = 'json'
//     xhr.setRequestHeader('Content-Type', 'application/json')

//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response)
//       } else {
//         resolve(xhr.response)
//       }
//     }

//     xhr.onerror = () => {
//       reject(xhr.response)
//     }

//     xhr.send(JSON.stringify(body))
//   })
// }

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = {
//     firstName: 'Vasya',
//     lastName: 'Ivanov'
// }

// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

