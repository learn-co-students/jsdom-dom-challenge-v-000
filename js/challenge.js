document.addEventListener("DOMContentLoaded", function() {
  let counter = document.getElementById('counter');
  let plus = document.getElementById('plus');
  let minus = document.getElementById('minus');
  let heart = document.getElementById('heart');
  let pause = document.getElementById('pause');
  let likes = document.querySelector('likes');
  let submitButton = document.getElementById('submit');
  let commentForm = document.getElementById('comment-form');


  let count = setInterval(() => {
    counter.innerHTML++
  }, 1000);

  plus.addEventListener('click', () => {
    counter.innerHTML++
  });

  minus.addEventListener('click', ()=> {
    counter.innerHTML--
  });

  pause.addEventListener('click', () => {
    if (pause.innerText === "pause") {
      clearInterval(count);
      pause.innerHTML = "resume";
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submitButton.disabled = true;
    } else {
      counter.innerHTML = 0;
      count = setInterval(() => {
        counter.innerHTML++
      }, 1000);
      pause.innerHTML = "pause";
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submitButton.disabled = false;
      document.querySelector('ul.likes').innerHTML = ""
    }
  });

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = commentForm.querySelector('input').value;
    document.getElementById('list').appendChild(p);
    commentForm.reset();
  });

  const likeCount = {}
  heart.addEventListener("click", (e) => {
    num = parseInt(counter.innerText);

    likeCount[num] ? likeCount[num]++ : likeCount[num] = 1;

    if (document.getElementById(`${num}`)) {
      document.getElementById(`${num}`).innerText = `${num} has been liked ${likeCount[num]} times`;
    } else {
      let li = document.createElement('li');
      li.innerText = `${num} has been liked ${likeCount[num]} times`;
      li.setAttribute('id', `${num}`);
      document.querySelector('ul.likes').appendChild(li);
    }
  });
});
