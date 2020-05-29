// repeatedly calls updateCounter every second
let intervalId = setInterval(updateCounter, 1000);
// counter
const counter = document.getElementById('counter');
// buttons
const pause = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const submit = document.getElementById('submit');
// comment form
const commentForm = document.getElementById('comment-form');
// likes
const likes = {};
// increment the counter
function increment() {
  counter.innerText++;
}
// decrement the counter
function decrement() {
  counter.innerText--;
}
// called on my setInterval
function updateCounter() {
  increment();
}
// pause the counter
function paused() {
  if (pause.innerText == 'pause'){
    // change button text
    pause.innerText = 'resume';
    // disable buttons
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    //stop counter
    clearInterval(intervalId);
  } else {
    // change button text
    pause.innerText = 'pause';
    // enable buttons
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    //restart counter
    intervalId = setInterval(updateCounter, 1000);
  }
}
// like a number
function likeNum() {
  // number that is liked
  num = parseInt(counter.innerText);
  // check if num is key in hash & increment or assign 1
  likes[num] ? likes[num]++ : likes[num] = 1;
  // if number has been liked before, update innerText
  if (document.getElementById(`${num}`)) {
    document.getElementById(`${num}`).innerText = `${num} has been liked ${likes[num]} times`;
  } else { // create li, assign id & innerText, and appendChild
    let li = document.createElement('li');
    li.innerText = `${num} has been liked ${likes[num]} times`;

    li.setAttribute('id', `${num}`);
    document.querySelector('ul.likes').appendChild(li);
  }
}
// submit a comment
function addComment(event) {
  // preventDefault action
  event.preventDefault();
  // create new <p>
  const p = document.createElement('p');
  // get the value from form input & assign to <p> 
  p.innerText = commentForm.querySelector('input').value;
  // append <p> to list
  document.getElementById('list').appendChild(p);
  // reset form
  commentForm.reset();
}
// DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  // event listeners
  pause.addEventListener('click', paused);
  plus.addEventListener('click', increment);
  minus.addEventListener('click', decrement);
  heart.addEventListener('click', likeNum);
  submit.addEventListener('click', addComment);
  // start counter
  intervalId;
});
