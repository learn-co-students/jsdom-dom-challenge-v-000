const form = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const submitComment = document.getElementById("submit")
const list = document.getElementById("list")
const counter = document.getElementById("counter")
let seconds = parseInt(counter.innerText)
var increment = setInterval(incrementSeconds, 1000)
const pause = document.getElementById("pause")
const resume = document.getElementById("resume")
const like = document.getElementById("heart")
const likes = document.getElementById("likes")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
let isPaused = false


form.addEventListener("submit", function(e) { 
  e.preventDefault()   
  listComment()
  clearcommentField()
})

pause.addEventListener("click", function(e) {
  if(!isPaused) {
    pauseTimer()
  } else {
    resumeTimer()
  }
})

plus.addEventListener("click", function(e) {
  seconds += 1
  counter.innerText = seconds
})

minus.addEventListener("click", function(e) {
  seconds -= 1
  counter.innerText = seconds
})

like.addEventListener("click", function(e) {
  addLike()
})

function pauseTimer() {
  isPaused = true
  pause.innerText = "resume"
  incrementSeconds()
}

function resumeTimer() {
  isPaused = false
  pause.innerText = "pause"
  incrementSeconds()
}

function listComment() {
  const addComment = document.createElement('li')
  addComment.innerText = commentInput.value
  list.appendChild(addComment)
}

function clearcommentField() {
  commentInput.value = ""
}

function incrementSeconds() {
  if(!isPaused) {
  seconds += 1;
  counter.innerText = seconds
  }
}


//not sure how to keep track of the number of likes for each number. Needs futher work
function addLike() {
  let count = 0
  const addLikeLi = document.createElement('li')
  addLikeLi.innerText = counter.innerText + ` has been liked ${count + 1} time`
  likes.appendChild(addLikeLi)
}