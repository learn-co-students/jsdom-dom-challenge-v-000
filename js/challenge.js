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
    console.log("Worked")
    secondsLeft = parseInt(secondsLeft) + 1;
    timerElement.textContent = secondsLeft;
});