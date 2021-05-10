const interval = setInterval(counterIncrement, 1000);
const counter = document.getElementById("counter");
const likesList = document.querySelector('ul.likes');

// AC 1
function counterIncrement() {
  counter.innerText = (parseInt(counter.innerText) + 1).toString();
}

// AC 2
document.getElementById("minus").addEventListener("click", function () {
  counter.innerText = (parseInt(counter.innerText) - 1).toString();
});

// AC 2
document.getElementById("plus").addEventListener("click", function () {
  counter.innerText = (parseInt(counter.innerText) + 1).toString();
});

// AC 3
document.getElementById("heart").addEventListener("click", function () {
    const likedNbr = counter.innerText;
    const likedId = `[data-num="${likedNbr}"]`;
    const currentLikes = likesList.querySelectorAll(likedId)[0];
    
    if (currentLikes) {
        let likedSpan = currentLikes.querySelector('span');
        likedSpan.innerText = (parseInt(likedSpan.innerText) + 1).toString();
    } else {
        const like = document.createElement('li');
        like.setAttribute('data-num',likedNbr);
        like.innerHTML = `${likedNbr} has been liked <span>1</span> times`;
        likesList.appendChild(like);
    }
});

// AC 4
document.getElementById('pause').addEventListener('click', function() {
    console.log("In pause");
    if (document.getElementById('pause').textContent != 'resume') {
        // pause counter
        clearInterval(interval);
        // disable all buttons except pause
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        // pause button text changes to resume
        document.getElementById('pause').textContent = 'resume';
    } else {
        // resume should restart the counter and re-enable buttons
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('pause').textContent = 'pause';
        setInterval(counterIncrement, 1000);
    }
});

// AC 5
document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const comment = document.getElementById("comment-input");
    const commentItem = document.createElement("p");
    commentItem.innerText = comment.value;

    document.getElementById("list").appendChild(commentItem);
    comment.value = "";
});
