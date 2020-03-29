document.addEventListener("DOMContentLoaded", () => {
  let startInterval = setInterval(incrementPerSecond, 1000);
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let submit = document.getElementById("submit");
  let likes = document.getElementsByClassName("likes")[0];
  let comments = document.getElementById("list");
  let form = document.getElementById("comment-form");
  let input = document.getElementById("comment-input");

  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  pause.addEventListener("click", pauseButtonClicked);
  heart.addEventListener("click", likeButtonClicked);
  // handles adding comments
  form.addEventListener("submit", function(event) {
    let comment = document.createElement("p");
    comment.innerText = input.value;

    event.preventDefault();
    comments.appendChild(comment);
  });

  function incrementPerSecond() {
    if (pause.innerText == "pause") {
      counter.innerHTML++;
    } else {
      clearInterval(startInterval);
    }
  };

  function increment() {
    counter.innerHTML++;
  };

  function decrement() {
    counter.innerHTML--;
  };

  function pauseButtonClicked() {
    if (pause.innerText == "pause") {
      pause.innerText = "resume";

      submit.disabled = true;
      heart.disabled = true;
      plus.disabled = true;
      minus.disabled = true;

      clearInterval(startInterval);
    } else {
      pause.innerText = "pause";

      submit.disabled = false;
      heart.disabled = false;
      plus.disabled = false;
      minus.disabled = false;

      // restart counter
      startInterval = setInterval(incrementPerSecond, 1000);
    }
  };

  function likeButtonClicked() {
    let like = document.createElement("li");
    like.innerText = counter.innerHTML + " was liked";

    likes.append(like);
  };

  startInterval;
});
