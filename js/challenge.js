document.addEventListener("DOMContentLoaded", () => {

  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("minus");
  let pauseState = false;
  const counter = document.getElementById("counter");
  let i = 0;
  // let start = setInterval(incrementPerSecond, 1000);
  let ul = document.getElementById("likes");
  let heart = document.getElementById("heart");
  let submit = document.getElementById("submit");
  let commentForm = document.getElementById("comment-form");
  let comments = document.getElementById("comments");
  let commentInput = document.getElementById("comment-input");
  let pauseButton = document.getElementById("pause");


  let counterFunc = window.setInterval(function () {
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
// function pauseButtonClick(){
//   if (pauseButton.innerText == "pause"){
//     pauseButton.innerText = "resume";
//     plusButton.disabled = true;
//     minusButton.disabled = true;
//     hear.disabled = true;
//     submit.disabled = true;
//     clearInterval(start);
//   }else{
//     pauseButton.innerText = "pause";
//     plusButton.disabled = false;
//     minusButton.disabled = false;
//     hear.disabled = false;
//     submit.disabled = false;
//     // startInterval = setInterval(incrementPerSecond(), 1000);
//   }
// };
  });

// });
