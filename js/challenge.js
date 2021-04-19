
let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementsByClassName('likes');
let comments = document.getElementById('list');
let counterInt = parseInt(counter.innerText, 10)

minus.addEventListener('click', deduct1);
plus.addEventListener('click', increase1);
pause.addEventListener('click', controlTheCounter);

function deduct1() {
    counterInt -=1;
    console.log('Decreased by 1');
    counter.innerText = counterInt
}

function increase1() {
        counterInt +=1;
        counter.innerText = counterInt
        console.log('Increased by 1');
}

function controlTheCounter() {
    if (pause.value === 'pause') {
        pause.value = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
      } else {
        pause.value = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
      }
}
