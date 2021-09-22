const question = confirm('Ты хочешь пива?')
let answer

if (question) {
    answer = 'Значит пойди купи, и мне бутылочку возьми!)))'
} else if (!question) {
    answer = 'Ну как хочешь, а я буду)))'
} else {
    alert('Перезагрузите страницу и ответьте на вопрос еще раз!');
}

alert(answer)