const fruits = ['Apple', 'Banana', 'Pineapple' ];
console.log(fruits);


fruits.push('Orange', 'Grapes');
console.log(fruits);


const indexFruits = fruits.indexOf('Banana');
fruits[indexFruits] = 'Peer';
console.log(fruits);


const lastFruit = fruits.pop();
console.log(lastFruit);


fruits.unshift('Watermelon');
console.log(fruits);