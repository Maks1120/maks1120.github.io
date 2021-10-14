'use strict'
const users = {
        'Ivan': '1111',
        'Petr': '2222' 
    }

isValid();

function isValid() {

    const login = prompt('Enter login!');
    let password = prompt('Enter password!');

    if (!login && !password) {
        alert('By.');
        return;
    } 

    const correctPassword = users[login];
    
    if (correctPassword === undefined) {
        createNewUser(login);
        return;
    }
    

    if (correctPassword === password) {
        alert(`Welcome ${login}!`);
        return;
    } 

    while (correctPassword !== password) {
        password = prompt('Invalid password, please enter again!');
        if (password === null) break;
    }
};


function createNewUser(newLogin) {
    const isCreateNewUser = confirm ('Login and password is not defined. Do you want to create a new user?');
    
    if (!isCreateNewUser) {
        alert('By!');
        return;
    }

    let newPassword = prompt(`Create a new password, for ${newLogin}`);

    while (!newPassword) {
        newPassword = prompt(`The password must contain at least one letter or number. ${newLogin} please try again.`);
    }

    users[newLogin] = newPassword;
    isValid();
};


console.log(users);