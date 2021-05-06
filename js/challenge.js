let interval = setInterval(updateCounter, 100);
const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const submit = document.getElementById('submit');
const commentForm = document.getElementById('comment-form');
const likes = {};

function increase() {
    counter.innerText++;
}

function decrease() {
    counter.innerText--;
}

function updateCounter() {
    increase();
}

function paused() {
    if (pause.innerText == 'pause') {
        pause.innerText = 'resume';
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;

        clearInterval(interval);
    } else {
        pause.innerText = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;

        interval = setInterval(updateCounter, 100);
    }
}

function likes() {
    num = parseInt(counter.innerText);
    likes[num] ? likes[num]++ : likes[num] = 1;

    if (document.getElementById(`${num}`)) {
        document.getElementById(`${num}`).innerText = `${num} has been liked ${likes[num]} times`;
    } else {
        let li = document.createElement('li');
        li.innerText = `${num} has been liked ${likes[num]} times`;

        li.setAttribute('id', `${num}`);
        document.querySelector('ul.likes').appendChild(li);
    }
}

function addComment(event) {
    event.preventDefault();

    const p = document.createElement('p');
    p.innerText = commentForm.querySelector('input').value;
    document.getElementById('list').appendChild(p);

    commentForm.reset();
}

document.addEventListener('DOMContentLoaded', function () {
    pause.addEventListener('click', paused);
    plus.addEventListener('click', increase);
    minus.addEventListener('click', decrease);
    heart.addEventListener('click', likes);
    submit.addEventListener('click', addComment);

    interval;
});