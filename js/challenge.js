document.addEventListener('DOMContentLoaded', () => {
  let counter = document.getElementById('counter')
  let clock = setInterval(incrementCounter, 1000)
  let paused = false

  const resetButton = document.getElementById('reset')
  const pauseButton = document.getElementById('pause')
  const plusButton = document.getElementById('plus')
  const minusButton = document.getElementById('minus')
  const likeButton = document.getElementById('heart')


  function togglePause(){
    paused = !paused;
    if (paused){
      clearInterval(clock)
      pauseButton.textContent = "Resume"
  }else{
      clock = setInterval(incrementCounter, 1000)
      pauseButton.textContent = "Pause"
    }
  }

  function incrementCounter(){
    counter.textContent++
  }

  function decrementCounter(){
    --counter.textContent
  }

  function resetCounter(){
    counter.textContent = '0'
  }
  
  let likeCount = {}

  function totalLikes(number){
    if (likeCount[number] == undefined){
      likeCount[number] = 1
    }else{
      likeCount[number] ++
    }
  }

  function addLike(){
    number = counter.textContent
    totalLikes(number)
    const likes = document.getElementById('likes')
    let newLike = document.createElement('li')
    newLike.textContent = ` ${number} has been liked ${likeCount[number]} time `
    likes.appendChild(newLike)
  }

  const commentWrapper = document.getElementById("comments")
  const commentText = document.getElementById("comment-input")
  const submitComment = document.getElementById("submit")

  function addComment(){
    event.preventDefault()

    let comment = document.createElement('p')
    comment.textContent = commentText.value
    commentWrapper.appendChild(comment)

  }

  submitComment.addEventListener("click", addComment)

  pauseButton.addEventListener('click', togglePause)
  plusButton.addEventListener('click', incrementCounter)
  minusButton.addEventListener('click', decrementCounter)
  resetButton.addEventListener('click', resetCounter)
  likeButton.addEventListener('click', addLike)
})