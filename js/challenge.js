const counter = document.getElementById("counter");
const likes = document.getElementsByClassName("likes")[0];
const comments = document.getElementsByClassName("comments")[0];
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const restart = document.getElementById("restart");
const submit = document.getElementById("submit");
const buttons = document.getElementsByTagName("button");
var countUpTimer = setInterval(incrementCounter, 1000);


function incrementCounter(){
    counter.innerHTML++
};
function decrementCounter(){
    counter.innerHTML--
};
function likeANumber(){
    // find or create a list element called like
    let likedNumber = document.getElementById(counter.innerHTML)
    if (likedNumber){
        let numOfLikes = likedNumber.getAttribute("likes");
        numOfLikes++;
        likedNumber.setAttribute("likes",numOfLikes);
        likedNumber.innerText = 'The number '+likedNumber.id+' has '+numOfLikes+' now!!';
    } else {
        likedNumber = document.createElement("li");
        likedNumber.id = counter.innerHTML;
        likedNumber.setAttribute("likes",1);
        likedNumber.innerText = 'The number '+likedNumber.id+' has '+likedNumber.getAttribute("likes")+' now!!';
        likes.appendChild(likedNumber);
    }
};

function pauseCounter(){
    if (pause.innerText == "pause") {
        stopCounter();
    } else {
        resumeCounter();
    };
};

function restartCounter(){
    stopCounter();
    counter.innerHTML = 0;
    likes.innerHTML = "";
    comments.innerHTML = "";
    resumeCounter();
}

function stopCounter() {
    pause.innerText = "resume";
    clearInterval(countUpTimer);
    for (var i = 0; i < buttons.length; i++) {
        if ((buttons[i].id !== "pause") && (buttons[i].id !== "restart")){
            buttons[i].disabled = true;
        };
    };
};

function resumeCounter(){
    countUpTimer = setInterval(incrementCounter,1000);
    pause.innerText = "pause";
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    };
};

function submitComment(){
    event.preventDefault();
    let newComment = document.createElement("p");
    newComment.innerHTML = document.getElementById("comment-input").value;
    comments.appendChild(newComment);
};

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
heart.addEventListener("click", likeANumber);
pause.addEventListener("click", pauseCounter);
restart.addEventListener("click", restartCounter);
submit.addEventListener("click", submitComment);