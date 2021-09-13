const user = {
    name: prompt ('What is your name?'),
    age: prompt ('How old are you?'),
    role: prompt ('What is your role in the company?'),
    occupation: prompt ('What is your profession?')
}



console.log(user.name && user.age > 18);
console.log(user.role === 'Admin' || user.occupation === 'CEO');
console.log(user.occupation ? user.occupation : user.role);
console.log((user.name && user.age > 18) || (user.role === 'Admin'));
console.log((user.role !== 'Admin' && user.name) ? user.age : false);

