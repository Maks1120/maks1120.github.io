// Создайте страницу, с таймером. 

// Пользователь должен иметь возможность ввести минуты и секунды.
// При запуске таймера начинается отображение обратного отсчёта. 
// По прошествии времени таймер останавливается и выводится сообщение (не встроенное модальное окно!) о том, что время подошло к концу.

let inputMinutes = document.getElementById('minutes');
let inputSeconds = document.getElementById('seconds');
let runButton = document.getElementById('button');
let greeting = document.getElementById('show-greeting');

runButton.addEventListener('click', function() {
    timeSecond = parseInt(inputSeconds.value) + (parseInt(inputMinutes.value) * 60);
});
    
timer = setInterval(function () {
    let seconds = timeSecond%60; 
    let minutes = timeSecond/60%60;
    
    if (timeSecond <= 0) {
        clearInterval(timer);
        
        greeting.innerHTML = '<p>Добро пожаловать!</p>';
    } else { 
        
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        
        greeting.innerHTML = `<p>${strTimer}</p>`;
    }
    --timeSecond;
}, 1000);
