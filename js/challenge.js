document.addEventListener("DOMContentLoaded", () => {

  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  var pauseState = false;
  const counter = document.getElementById("counter");
  var i = 0;
  var ul = document.getElementById("likes");
  var heart = document.getElementById("heart");
  var submit = document.getElementById("submit");
  var commentForm = document.getElementById("comment-form");
  var comments = document.getElementById("comments");
  var commentInput = document.getElementById("comment-input");
  var pauseButton = document.getElementById("pause");

  var counterFunc = window.setInterval(function () {
        i = i + 1;
    document.getElementById("counter").innerHTML = i;
  }, 1000);


  plusButton.addEventListener("click", function(){
    i += 1;
  });

  minusButton.addEventListener("click", function(){
    i -= 1;
  });


  heart.addEventListener("click", function(){
    ul.innerHTML += `<li>I Like ${i}</li>`;
  });


  submit.addEventListener("click", function(e){
    comments.innerHTML += `<li>${commentInput.value}</li>`;
    e.preventDefault();
  });




  pauseButton.addEventListener("click", function(){
    !pauseState
    if(pauseState === false){
      pauseState = true;
      clearInterval(counterFunc);
    } else {
      counterFunc;
    };
  });
  });

// });
