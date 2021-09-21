const drink = prompt('Чай или кофе?');
const withSugar = prompt('С сахаром?');
const tea = ('чай');
const coffee = ('кофе');


const result  = drink === tea && withSugar === 'да'
                ? alert('Чай с сахаром') 
                : drink === tea && withSugar === 'нет'
                ? alert('Чай без caxapa')
                : drink === coffee && withSugar === 'да'
                ? alert('Кофе с сахаром')
                : drink === coffee && withSugar === 'нет'
                ? alert('Кофе без сахара')
                : alert('Неверно выбран напиток, перезагрузите страницу и попробуйте еще раз!')