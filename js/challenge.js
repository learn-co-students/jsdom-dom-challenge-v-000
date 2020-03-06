const clock = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
//timer increment
//start();

function start() {
    setInterval(increase, 1000);
}

function increase() {
    clock.innerText++;
}

//manual add
document.addEventListener()