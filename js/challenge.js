document.addEventListener("DOMContentLoaded", function() {

let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let subtract = document.getElementById('minus');
let pause = document.getElementById('pause')
let heart = document.getElementById('heart')
let paused = false
let seconds = parseInt(counter.innerText)
let clockDefault = setInterval(() => clockIncrement(), 1000);
let favoritesList = document.querySelector("ul");
let commentForm = document.getElementById('comment-form')
let commentInput = document.getElementById("comment-input");
let commentList = document.getElementById('list')


function clockIncrement() {
  if(!paused) {
  seconds += 1;
  counter.innerText = seconds
  }
}

function addSecond() {
  counter.innerHTML++;
}

function subtractSecond() {
  counter.innerHTML--;
}

function pauseClock() {
  if (paused === false) {
    paused = true;
    pause.innerText = 'resume';
  }
}

function addFavorite() {
  let favoritesCount = 1;
  let favorite = document.createElement("li");
  favorite.innerText = seconds + " has been liked " + favoritesCount + " time";
  favoritesList.appendChild(favorite);
}

function addComment() {
    event.preventDefault();
    let listElement = document.createElement("li");
    listElement.innerHTML = commentInput.value;
    commentList.appendChild(listElement);
  };

plus.addEventListener("click", addSecond);
subtract.addEventListener("click", subtractSecond);
pause.addEventListener('click', pauseClock);
heart.addEventListener('click', addFavorite);
commentForm.addEventListener('submit', addComment);

})