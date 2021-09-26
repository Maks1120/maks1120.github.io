const number = +prompt('Введите число больше или меньше ста!')
function funcResult() {
    
    if (number < 100) {
        function pow() {
            let degree = a; 
        
            for (let d = 1; d < b; d++) {
                degree *= a;
                }
                return degree;
            }
            let a = +prompt('Введите число')
            let b = +prompt('Введите степень')
            alert(pow(a,b));
            
    } else if (number >= 100) {
        function userData() {
            let firstName = prompt('Введите имя');
            let lastName = prompt('Введите фамилию');
            let age = prompt('Введите возраст');

            alert (`${firstName}, ${lastName}, ${age}`);
        }
        userData();
    } else {
        alert('Error')
    }
}
funcResult();