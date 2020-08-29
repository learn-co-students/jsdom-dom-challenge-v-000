// As a user, I should see the timer increment every second once the page has loaded.
const timerElement = document.getElementById("counter")
const upButton = document.getElementById("plus");
const downButton = document.getElementById("minus");
const pauseButton = document.getElementById("pause")
const likeButton = document.getElementById("heart")
let secondsLeft = 0;
let isPaused = false


let timerInterval = setInterval(function () {
    secondsLeft++;
    timerElement.textContent = secondsLeft;
}, 1000);
    // if (secondsLeft <= 0) {
    //     clearInterval(timerInterval);
    // }

    // if (!isPaused) {
    //     time++;
    //     output.text("Seconds: " + time);
    // }
// }, 1000);

upButton.addEventListener("click", () => {
    console.log("Worked")
    secondsLeft = parseInt(secondsLeft) + 1;
    timerElement.textContent = secondsLeft;
});

downButton.addEventListener("click", () => {
    console.log("Worked")
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
        
    // pauseButton.textContent = secondsLeft;
    // timerElement.textContent = secondsLeft;
});

// downButton.addEventListener("click", () => {

// });
// increment = setInterval(function () {
//     secondsLeft--;
//     timerElement.textContent = secondsLeft;

//     if (secondsLeft <= 0) {
//         clearInterval(timerInterval);
//     }