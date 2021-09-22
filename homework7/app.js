let a = 1;
let b = 1;
let c;
const serialFibNumber = +prompt('Какой порядковый номер ряда фибоначчи вывести?');

for (let d = 3; d <= serialFibNumber; d++) {
  c = a + b;
  a = b;
  b = c;
}

if (serialFibNumber === 1 || serialFibNumber === 2) {
  alert('1');
} else {
  alert(c);
}