

function firstObjectFunc() {
    const object1 = {}
    // console.log('toString' in object1); // вариант 1
    console.log(object1.value === undefined) // вариант 2
}
firstObjectFunc();




function secondObjectFunc() {
    const object2 = {
        firstName: false
    }

    for (key in object2) {
        console.log(object2[key]);
    }
}
secondObjectFunc();





function onlyNumbers() {
    let user = {
    '0': 'zero', 
    '42': 'answer', 
    'greeting': 'Hello',
    '3.14': 'PI', 
    '55': 'age'
  }

    let result = [];
        for (key in user) {
            if (!isNaN(+key)) {
            result.push(user[key]);
        }
    }
    console.log(result);
}
onlyNumbers();