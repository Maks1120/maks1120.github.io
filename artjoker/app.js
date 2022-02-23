const result = document.getElementById('true-promo');
const onlyNumbersVal = document.getElementById('only-numbers');
const onlyEightSymbols = document.getElementById('only-eight-symbols');
const button = document.getElementById('btn');

// Ограничение ввода 8 символов и ввод только цифр
const input = document.getElementById('input-promo');

input.oninput = function () {
    let regex = /[-\.,±§!@#$%ˆ&*()_+=-{}|;":'a-zA-Zа-яА-Я]/;
    
    if (input.value.match(regex)) {
        onlyNumbersVal.style.display = 'block';
        
        onlyEightSymbols.style.display = 'none';

        result.innerHTML = '';
    } else if (this.value.length < 8) {
        onlyEightSymbols.style.display = 'block';

        onlyNumbersVal.style.display = 'none';
    } else {
        onlyNumbersVal.style.display = 'none';

        onlyEightSymbols.style.display = 'none';
    }   
    
    this.value = this.value.replace(regex, '');

    this.value = this.value.substr(0, 8);
}

let arrNumVal;

// По клику на кнопку делает из значения инпута массив чисел
button.addEventListener ('click', function () {
    arrNumVal = input.value.split('').map(num => +num);

    input.value = '';

    invalidPromoCode();
})


function invalidPromoCode() {
    const onlyOdds = arrNumVal.filter(o => o % 2).reduce((collect, elem) => collect + elem);
    // console.log(onlyOdds)

    const onlyEver = arrNumVal.filter(e => e % 2 === 0).reduce((collector, element) => collector + element);
    // console.log(onlyEver)

    if (onlyOdds > onlyEver) {
            result.innerHTML  = 'Ваш промокод недействителен';
            result.style.color = 'red';
    }
}
