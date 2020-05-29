
let counter = document.getElementById("counter");

counter.innerHTML = 0;

let isPaused = false;

function setCounter() {
    if(!isPaused) {++counter.innerHTML
    }
};

const pause = document.getElementById("pause");

pause.addEventListener("click", pauseCounter);

function pauseCounter() {
    if(!isPaused) { pause.innerHTML = "resume";
    isPaused = true;
    }
    else if (isPaused) { pause.innerHTML = "pause";
    isPaused = false;
    }    
};

const plus = document.getElementById("plus");

plus.addEventListener("click", plusCounter);

function plusCounter() {
    if(!isPaused) {++counter.innerHTML}
}

const minus = document.getElementById("minus");

minus.addEventListener("click", minusCounter);

function minusCounter() {
    if(!isPaused) {--counter.innerHTML}
}

const heart = document.getElementById("heart");

heart.addEventListener("click", like);

function like() {
    if(!isPaused) {let newLike = document.createElement("li");
    newLike.className = counter.innerText
    newLike.innerHTML = `${counter.innerText} has ${newLike.className.count} likes`;
    document.querySelector('ul.likes').appendChild(newLike)}
};

const comment = document.getElementById("comment-form");
comment.addEventListener("submit", createNewComment);

function createNewComment(event) {
    event.preventDefault();
    const newCommentInput = document.getElementById("comment-input"); 
    const newComment = document.createElement("li");
    newComment.innerText = newCommentInput.value; 
    document.getElementById("list").appendChild(newComment);
    event.target.reset();
}


setInterval(setCounter, 1000);
