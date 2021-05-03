const timerElement = document.getElementById("counter")
const upButton = document.getElementById("plus");
const downButton = document.getElementById("minus");
const pauseButton = document.getElementById("pause")
const likeButton = document.getElementById("heart")
const submitElement = document.getElementById("submit")
const listComments = document.getElementById("list")

let likeCount = 0;
let secondsLeft = 0;
let isPaused = false;

let timerInterval = setInterval(function () {
    secondsLeft++;
    timerElement.textContent = secondsLeft;
}, 1000);

upButton.addEventListener("click", () => {
    console.log("Works")
    secondsLeft = parseInt(secondsLeft) + 1;
    timerElement.textContent = secondsLeft;
});

downButton.addEventListener("click", () => {
    console.log("Works")
    secondsLeft = parseInt(secondsLeft) - 1;
    timerElement.textContent = secondsLeft;
});

pauseButton.addEventListener("click", () => {
    if (!isPaused) {
        clearInterval(timerInterval);
        upButton.setAttribute("disabled", "disabled") ;
        downButton.setAttribute("disabled", "disabled");
        likeButton.setAttribute("disabled", "disabled");
        pauseButton.innerText = "resume";
        isPaused = true
    }
    else {
        isPaused = false
        timerInterval = setInterval( function() {
            secondsLeft++;
            timerElement.textContent = secondsLeft;
        }, 1000);
        upButton.removeAttribute("disabled")
        downButton.removeAttribute("disabled")
        likeButton.removeAttribute("disabled")
        pauseButton.innerText = "pause";
    }
});

likeButton.addEventListener("click", function() {
    console.log("Works)
    let likes = document.querySelector(".likes") 
    likeCount += 1;
    likes.innerText = likeCount
    console.log(this.innerText)

});

submitElement.addEventListener("click", function () {
    event.preventDefault();
    console.log("it's Working");
    var response = "This is fun.";
    listComments.textContent = response;

});