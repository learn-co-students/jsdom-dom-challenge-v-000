function timer(){
  return setInterval(increment, 1000);
};
interval = timer();
let trigger = 0
const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');

document.addEventListener("DOMContentLoaded", () => {
  minus.addEventListener("click", subtract);
  plus.addEventListener('click', increment);
  heart.addEventListener("click", likes );
  pause.addEventListener('click',function(e){
    if (trigger == 0){
      clearInterval(interval);
      trigger = 1
    } else if (trigger == 1){
      interval = timer();
      trigger = 0
    };
    
  });
  commentForm.addEventListener('submit', function addComment(e){
    e.preventDefault();s
    let comment = document.createElement('li');
    comment.innerText = document.getElementById('comment-input').value;
    document.getElementById('list').appendChild(comment);
  });
});


function increment(){
  counter.innerText = parseInt(counter.innerText, 10) + 1
};

function timer(){
  return setInterval(increment, 1000);
};

function subtract(){
  counter.innerText = parseInt(counter.innerText, 10) - 1
};

function likes(){
  const likesUl = document.querySelector('.likes');
  let n = counter.innerText;
  const like = document.createElement('li')
  like.innerText = ` ${n} has been liked times`;
  likesUl.appendChild(like);
};

function addComment(){
  let comment = document.createElement('li');
  comment.innerText = document.getElementById('comment-input').value;
  document.getElementById('list').appendChild(comment);
};
