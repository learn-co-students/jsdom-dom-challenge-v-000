document.addEventListener("DOMContentLoaded", () => {

//*main fn
function createCounter() {

 counterWorking = setInterval( function(){
                            counter++;
                            displayCounter();
                        },1000);
counterIsWorking = 1;

};


function increaseCounter() {
    counter++;
    displayCounter();
};

function decreaseCounter() {
    counter--;
    displayCounter();
};

function stopCounter() {
    if (counterIsWorking){
     clearInterval(counterWorking);
     displayCounter();
     counterIsWorking = 0;
     pauseCounter.innerText = "resume"
    } else {
        createCounter();
        displayCounter();
        counterIsWorking = 1;
        pauseCounter.innerText = "pause"
    }

};

function postHeart() {
    let comment = createListElement();
    comment.innerText = `${counter}  has been liked 1 time`;

};

function leaveComment(event) {
    console.log(" create commentario ");
    let text = document.createElement('p');
    text.textContent =  form.querySelector('input').value;
    heartList.appendChild(text);
    event.preventDefault();
};

//* Second level fn
function displayCounter(){
    counterDisplayElem.innerHTML = counter;
}

function createList(){
    const newUl =  document.createElement('ul');
    heartList.appendChild(newUl);
}
function createListElement(){
    const newLi =  document.createElement('li');
    let item = heartList.lastChild.appendChild(newLi);
    return item;
}

//* get dom elements
let counterDisplayElem = document.getElementById('counter');
let plusCounter =  document.getElementById('plus');
let minusCounter = document.getElementById('minus');
let heartCounter = document.getElementById('heart');
let pauseCounter = document.getElementById('pause');
let heartList = document.getElementById('list');
const form = document.getElementById('comment-form');

//*Initialize
let counter = 0;
let counterWorking;
let counterIsWorking;
createCounter();
createList();

//*Events

plusCounter.addEventListener('click', increaseCounter);
minusCounter.addEventListener('click',decreaseCounter);
pauseCounter.addEventListener('click', stopCounter);
heartCounter.addEventListener('click',postHeart);
form.addEventListener('submit',leaveComment)



});
