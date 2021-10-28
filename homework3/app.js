// У вас есть 4 переменные:

// name - имя пользователя (строка)
// age - возраст поьлзователя (число)
// role - роль пользователя (строка)
// occupation - род деятельности пользователя (строка)

// Используя эти переменные, напишите следующие операции только с помощью операторов:

// Операцию, которая вернёт true, если имя пользователя определено И его возраст больше 18
// Операцию, которая вернёт false, если роль пользователя НЕ "Admin" ИЛИ род деятельности НЕ "CEO".
// Операцию, которая вернёт род деятельности пользователя, если он определён. Если нет - роль.
// Операцию, которая вернёт true, если имя пользователя опеределено И ему больше 18, ИЛИ когда его роль "Admin".
// Операцию, которая вернёт возраст пользователя, если его роль НЕ "Admin" И имя опредено. В противном случае - false.



const user = {
    name: prompt ('What is your name?'),
    age: prompt ('How old are you?'),
    role: prompt ('What is your role in the company?'),
    occupation: prompt ('What is your profession?')
}



console.log(user.name && user.age > 18);
console.log(user.role === 'Admin' && user.occupation === 'CEO');
console.log(user.occupation || user.role);

console.log((user.name && user.age > 18) || (user.role === 'Admin'));
console.log((user.role !== 'Admin' && user.name) ? user.age : false);

