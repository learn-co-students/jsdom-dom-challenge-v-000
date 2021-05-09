// timer should increment every second once the page is loaded
document.addEventListener("DOMContentLoaded", (event) => {
  plusButton.addEventListener("click", incrementCounter)
  minusButton.addEventListener("click", decrementCounter)
  likeButton.addEventListener("click", addLike)
  pauseButton.addEventListener("click", pauseCounter)
  form.addEventListener("submit", addComment)
})


const pauseCounter = () => {
  let buttons = document.querySelectorAll("button")

  if (pauseButton.innerHTML == "resume") {
    //reset counter and re-enable buttons;
    let counter = document.querySelector("#counter")
    counter.innerHTML = '0'
    buttons.forEach(button => button.disabled = false)
    pauseButton.innerHTML = "pause"
    // restart counter
    startCounter = setInterval(incrementCounter, 1000)
  } else {
    clearInterval(startCounter)
    // disable buttons plus/minus/heart
    buttons.forEach(button => {
      if (button.id != 'pause') {
        button.disabled = true;
      }
    })
    pauseButton.innerHTML = 'resume'
  }
}

const incrementCounter = () => {
  let counter = document.querySelector("#counter")
  let currentCount = parseInt(counter.innerHTML, 10)
  let newCount = ++currentCount
  counter.innerHTML = newCount.toString()
}

let startCounter = setInterval(incrementCounter, 1000)

const decrementCounter = () => {
  let counter = document.querySelector("#counter")
  let currentCount = parseInt(counter.innerHTML, 10)
  let newCount = --currentCount
  counter.innerHTML = newCount.toString()
}

const addLike = () => {
  // check if {} has counter.innerHTML as prop and if not,
  // set it as property and set value to 1 
  // add <li> to ul.likes
  // if already liked, then find the li item that has #id of number and ++
  let likesList = document.querySelector(".likes")
  let count = document.querySelector("#counter").innerHTML
  if (!likes.hasOwnProperty(count)) {
    likes[count] = 1
    let li = document.createElement('li')
    li.id = `number-${count}`
    li.innerHTML = `${count} has been liked ${likes[count]} time.`
    likesList.append(li)
  } else {
    let likedItem = document.querySelector(`#number-${count}`)
    likedItem.innerHTML = `${count} has been liked ${++likes[count]} times.`
  }
}


const addComment = (event) => {
  // find the text content of #comment-input
  // find #list and append <li> of above
  // form submit = auto refresh
  event.preventDefault();
  let comment = document.querySelector('#comment-input').value
  let list = document.querySelector('#list')
  let listComment = document.createElement('li')
  listComment.innerHTML = comment
  list.append(listComment)
  debugger;
}

// Buttons
const plusButton = document.querySelector("#plus")
const minusButton = document.querySelector('#minus')
const likeButton = document.querySelector('#heart')
const pauseButton = document.querySelector('#pause')
const form = document.querySelector('#comment-form')
// Number of Likes Tracker
const likes = {}


