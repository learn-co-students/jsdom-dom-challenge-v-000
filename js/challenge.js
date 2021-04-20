
let counter = document.getElementById('counter');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes = document.getElementsByClassName('likes')[0];
let likesCounter = []
let comments = document.getElementById('list');
let submit = document.getElementById('submit');
let counterInt = parseInt(counter.innerText, 10)

minus.addEventListener('click', deduct1);
plus.addEventListener('click', increase1);
pause.addEventListener('click', controlTheCounter);
heart.addEventListener('click', userLiked);

function deduct1() {
    counterInt -=1;
    counter.innerText = counterInt
}

function increase1() {
        counterInt +=1;
        counter.innerText = counterInt
}

function controlTheCounter() {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
      } else {
        pause.innerText = 'pause';
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
      }
}
function userLiked() {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(likes);

    let currentVal = 0;
    if (likesCounter[(counterInt)] >= 0) {
        currentVal = likesCounter[(counterInt)] + 1; }
        else { currentVal = 1;
    }; 
    likesCounter[(counterInt)] = currentVal;
    console.log(`The number ${counterInt} was liked ${likesCounter[(counterInt)]} times.`);
    let i;
    for (i = 0; i < likesCounter.length; i++) {
       if (likesCounter[(i)] > 0) {
        let likemsg = document.createElement("li");                 
        likemsg.innerHTML = `The number ${counterInt} was liked ${likesCounter[(counterInt)]} times.`;                
        likes.appendChild(likemsg); 
       };
    }
}