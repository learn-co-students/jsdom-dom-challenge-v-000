
const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('likes')[0];
let likesCounter = []
const comments = document.getElementById('list');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('comment-form');
let counterInt = parseInt(counter.innerText, 10)
let timerSwitch = true;

minus.addEventListener('click', deduct1);
plus.addEventListener('click', increase1);
pause.addEventListener('click', controlTheCounter);
heart.addEventListener('click', userLiked);
form.addEventListener('submit', handleSubmit);
submitBtn.addEventListener('click', addUserComment);

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
      timerSwitch = (!timerSwitch);
      checkTimerSwitch();
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
    let i;
    for (i = 0; i < likesCounter.length; i++) {
       if (likesCounter[(i)] > 0) {
        let likemsg = document.createElement("li");  
        likemsg.innerText = `The number ${i} was liked ${likesCounter[(i)]} times.`;                
        likes.appendChild(likemsg); 
       };
    }
}

function addUserComment() {
    
    let userComment = document.getElementById('comment-input').value
    el = document.createElement('p');
    el.innerText = userComment;
    comments.appendChild(el);
    form.reset();
}

function handleSubmit(event) {
    event.preventDefault();
}

let myVar; 

 function myFunction() {
        myVar = setInterval(alertFunc, 1000);
  }
  
  
  function alertFunc() {
        counterInt += 1;
        counter.innerText = counterInt;
  }

 function myStopFunction() {
     clearInterval(myVar);
    }

function checkTimerSwitch() {
    if (timerSwitch) {
        myFunction();
    }
    else {
        myStopFunction();
    }
}

 myFunction();