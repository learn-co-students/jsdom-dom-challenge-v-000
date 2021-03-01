const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
let numberTracker = {};
const likes = document.querySelector('ul.likes');
const pause = document.getElementById('pause');
let paused = false;
const comment_form = document.querySelector('#comment-form')
const comments = document.querySelector('#list')


let interval = setInterval(incrementCounter, 1000)
plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
heart.addEventListener("click", addLike)
pause.addEventListener("click", togglePaused)
comment_form.addEventListener("submit", handleSubmit)

function incrementCounter(event){
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decrementCounter(event){
    counter.innerText = parseInt(counter.innerText) - 1;
}

function addLike(){
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    renderLikes()
}

function renderLikes(){
    likes.innerHTML = ""
    for (let key in numberTracker){
      const li = document.createElement("li")
      li.innerText = `${key} has been liked ${numberTracker[key]} times.`
      likes.append(li)
    }
}

function togglePaused(){
    paused = !paused;
    if (paused) {
      clearInterval(interval)
      pause.innerText = "resume"
    } else {
      interval = setInterval(incrementCounter, 1000)
      pause.innerText = "pause"
    }
}

function handleSubmit(event){
    event.preventDefault()
    const comment = event.target.querySelector("input").value
    // console.log(event.target.elements);
    const li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    event.target.reset()
  }
