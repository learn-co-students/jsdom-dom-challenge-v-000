const timer = document.getElementById("counter");
let count = 0;

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");

const likesList = document.querySelector("ul");

const comments = document.getElementById("list");
const commentsList = document.createElement("ul");
comments.appendChild(commentsList);

let pauseTimer = false;

function startTimer() {
    intervalID = setInterval(function() {
        if (pauseTimer == false) {
            count += 1;
        }
        timer.textContent = count;
    }, 1000);
};

document.addEventListener("DOMContentLoaded", function() {
    
    plus.addEventListener("click", function() {
        if (pauseTimer == false) {
            count += 1;
            timer.textContent = count;
        }
      });

    minusButton.addEventListener("click", function() {
        if (pauseTimer == false) {
            count -= 1;
            timer.textContent = count;
        }
    });

    pauseButton.addEventListener("click", function() {
        if (pauseTimer == false) {
            pauseTimer = true;
            pauseButton.innerText = 'resume';
        } else {
            pauseTimer = false;
            pauseButton.innerText = 'pause';
            count = 0;
            timer.textContent = count;
        }
    });

    heartButton.addEventListener("click", function() {
        if (pauseTimer == false) {
            let likesCount = 1;
            let like = document.createElement("li");
            like.innerText = count + " has been liked " + likesCount + " time";
            likesList.appendChild(like)
        }
    });

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        if (pauseTimer == false) {
            let comment = document.createElement("li");
            comment.innerText = document.getElementById("comment-input").value
            commentsList.appendChild(comment)
            document.getElementById("comment-input").value = "";
        }
    });
    
    startTimer()
    
});