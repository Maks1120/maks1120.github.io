let a = +prompt('Введите число');
let b = +prompt('Введите степень');

function pow(a,b) {
    let degree = a; 

    for (let d = 1; d < b; d++) {
        degree *= a;
        }
        return degree;
}
    alert(pow(a,b));




function createUser(firstName = null, lastName = null, age = null) {
    const user = {
        firstName,
        lastName,
        age
    }
    return user;
}

    console.log(createUser('Pupkin', 'Vasya'));



function upTo100() {
    alert('До ста!');
}
    
function after100() {
    alert('После ста!');
}

const userNumber = prompt('Введите число больше или меньше 100')
function funcResult(resultUpTo100, resultAfter100, userNumber) {
 
    if (userNumber < 100) {
        resultUpTo100();
    } else if (userNumber > 100) {
        resultAfter100();
    }
}

funcResult(upTo100, after100, userNumber);
