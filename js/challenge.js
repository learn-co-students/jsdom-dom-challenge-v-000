const counter = document.getElementById('counter');

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

  var playing=!0
    timer = function(){
    return setInterval(function(){
      var a = document.getElementById("counter"), b = parseInt(a.innerText);
      a.innerText=b+1},1e3)
    },
    interval = timer();


    let pause = document.getElementById('pause');
    pause.addEventListener('click', function(){
      playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),
      this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)}
    )});


const plus = document.getElementById('plus');
plus.addEventListener('click', function(event) {
  let parsed = parseInt(counter.innerText);
  counter.innerText = parsed + 1;
});

const minus = document.getElementById('minus');
minus.addEventListener('click', function(e) {
  let parsed = parseInt(counter.innerText);
  counter.innerText = parsed - 1;
});


const submit = document.getElementById('comment-form').querySelector('button');
const commentsList = document.getElementById('list');
const comment = document.getElementById('comment-form').querySelector('input');
submit.addEventListener('click', function(e) {
  e.preventDefault()
  const newComment = document.createElement('li');
  commentsList.appendChild(newComment);
  newComment.innerText = comment.value;
});



