let count = 0;
let intervalID; 

const timer = document.getElementById("counter");

document.addEventListener("DOMContentLoaded", function() {
    clock()
}
)

function clock() {
    intervalID = setInterval(function() {
        count += 1;
        timer.TextContent = count;
    }, 1000);
    console.log("@@timer", timer)
};