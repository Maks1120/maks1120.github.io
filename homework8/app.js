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



const numberSelection = +prompt('Введите число Больше или меньше ста!');
function funcResult() {
    
    if (numberSelection < 100) {
        upTo100()
    } else if (numberSelection >= 100) {
        after100()
    } else {
        alert('Error');
    }
}
funcResult();


function upTo100() {
    alert('До ста!');
}

function after100() {
    alert('После ста!');
}

