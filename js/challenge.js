document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let comments = document.getElementById("comment-form");
  let list = document.getElementById("list");
  let submit = document.getElementById("submit");
  let buttons = document.querySelectorAll("button");
  let running = true;

  const counterFunction = () => counter.innerHTML = parseInt(counter.innerHTML) + 1

  let interval = setInterval(counterFunction, 1000);

  const timer = (running) => {
    if (running) {
      interval = setInterval(counterFunction, 1000);
    }else {
      clearInterval(interval);
    }
  }

  minus.addEventListener('click', event => {
    if (parseInt(counter.innerHTML) > 0) {
      counter.innerHTML = parseInt(counter.innerHTML) - 1
    }
  });

  plus.addEventListener('click', event => {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  });

  heart.addEventListener('click', event => {
    const likesList = document.querySelector(".likes")
    const targetLi = likesList.querySelector(`[data-count="${counter.innerHTML}"]`)

    if(!!targetLi) {
      let targetSpan = targetLi.querySelector("span");
      targetLi.innerHTML = `${counter.innerHTML} has been liked <span>${parseInt(targetSpan.innerHTML)+1}</span> times.`
    }else{
      likesList.innerHTML += `<li data-count="${counter.innerHTML}"> ${counter.innerHTML} has been liked <span>1</span> time.</li>`;
    }
  });

  pause.addEventListener('click', event => {
    running = !running
    timer(running)
    if (running) {
      pause.innerHTML = "Pause";
      toggleButtons(!running);
    }else{
      pause.innerHTML = "Resume";
      toggleButtons(!running);
    }
  });

  comments.addEventListener('submit', event => {
    let input = document.querySelector("#comment-input").value;
    list.innerHTML += `<p>${input}</p>`;
    event.preventDefault();
  })

  const toggleButtons = (status) => {
    buttons.forEach(button => {
      if (button !== pause) {
        button.disabled = status;
      }
    })
  }
});
