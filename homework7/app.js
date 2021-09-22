let a = 1
let b = 1
let c
const serialFibNumber = prompt('Какой порядковый номер последовательности фибоначчи вывести?')

for (let d = 3; d <= serialFibNumber; d++) {
    с = a + b;
    a = b;
    b = с;
    alert(b)
} 

if (serialFibNumber === '1') {
    alert('1')
} else if (serialFibNumber === '2') {
    alert('1')
} else if (serialFibNumber === null) {
    alert('error')
}