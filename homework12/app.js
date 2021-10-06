
'use strict'
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;

    this.meow = function() {
        console.log(`Мяу, ${name}, ${breed}`);
    }
}

let cat = new Cat('Vasya', 'sphinx');
console.log(cat);
cat.meow();





function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, ${this.firstName}`);
    }
}

const userGreet = new User('Ivan', 'Ivanov', 33);

userGreet.greet();

userGreet.firstName = 'Vasya';

userGreet.greet();

