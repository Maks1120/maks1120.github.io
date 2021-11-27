// 1. Создайте класс Vegetable(name), содержащий в себе имя овоща.
// 2. Создайте класс Animal(legs), реализующий метод eat(food). У каждого животного должен быть массив объектов stomach, в который попадает еда food
// 3. Создайте класс Rabbit(breed), наследующий от Animal и реализующий метод jump(). При этом, метод eat должен выбрасывать ошибку, если кролик пытается съесть что-то, кроме овощей.
// 4. Создайте класс Snake(isPoisonous), наследующий от Animal и реализующий метод crawl(). При этом, метод eat должен выбрасывать ошибку, если змея ест что-либо, кроме кроликов.
// 5. Создайте класс Human(firstName, lastName), наследующий от Animal и реализующий метод walk() и greet(). При этом, метод eat должен выбрасывать ошибку, если человек пытается съесть другого человека.


// Ошибка должна быть выброшена, а не просто выведена в консоль. То есть, дальнейшая работа кода должна быть остановлена из-за ошибки.


// 1
class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

// // 2
class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    stomach = [];

    eat(food) {
        this.stomach.push(food);
        return `ест ${this.legs}`
    }
}


// 3 
class Rabbit extends Animal {
    constructor(breed) {
        super(breed);
        this.breed = breed;
    }

    jump() {
        return `${this.breed} прыгает`;
    }

    eat(food) {
		if (!(food instanceof Vegetable)) {
			throw new Error("Кролики едят только овощи!")
		}
		super.eat(food);
	}
}


// 4
class Snake extends Animal {
    constructor(isPoisonous) {
        super(isPoisonous);
        this.isPoisonous = isPoisonous;
    }

    crawl() {
        return `${this.isPoisonous} ползает`;
    }
    
    eat(food) {
        if (!(food instanceof Rabbit)) {
            throw new Error('Змеи не едят овощи')
        }
        super.eat(food);
    }
}


// 5
class Human extends Animal {
    constructor (firstName, lastName) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk() {
        return `${this.firstName} ${this.lastName} ходит`;
    }

    greet() {
        return `Здравствуйте ${this.firstName} ${this.lastName}`;
    }

    eat(food) {
		if (food instanceof Human) {
			throw new Error('Люди не едят других людей!');
		}
		super.eat(food);
	}
}