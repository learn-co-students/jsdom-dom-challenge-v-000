const clock = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
//timer increment
//  **********start();

function start() {
    setInterval(increase, 1000);
}

function increase() {
    clock.innerText++;
}

//manual add
plus.addEventListener("click", function() {
    let clock = document.getElementById('counter');
    let num = parseInt(clock.innerText);
    clock.innerText = num += 1;
})