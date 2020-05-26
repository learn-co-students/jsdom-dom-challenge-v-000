const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const like = document.getElementById('heart')
const pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
const comments = document.getElementById('list')
const likes = {}
const isRunning = () => {
    return pause.innerText === "pause" ? true : false
}
const increment = () => {
    counter.innerText = parseInt(counter.innerText) + 1
}
const decrement = () => {
    counter.innerText = parseInt(counter.innerText) - 1
}

const handleLike = () => {
    const key = parseInt(counter.innerText)
    const ul = document.querySelector('ul')
    // if our likes key exists, increment, else set to 1
    likes[key] ? likes[key] += 1 : likes[key] = 1

    if (document.getElementById(`like-${key}`)) {
        document.getElementById(`like-${key}`).innerText = `${key} has been liked ${likes[key]} times`
    } else {
        const li = document.createElement('li');
        li.setAttribute('id', `like-${key}`);
        li.innerText = `${key} has been liked ${likes[key]} time`;
        ul.append(li)
    }
}

const handlePause = () => {
    pause.innerText = isRunning() ? "resume" : "pause"
    plus.disabled = isRunning() ? false : true
    minus.disabled = isRunning() ? false : true
    like.disabled = isRunning() ? false : true
    submit.disabled = isRunning() ? false : true
}

const handleSubmit = (e) => {
    e.preventDefault()
    const commentText = form.querySelector('input').value
    const comment = document.createElement('p')
    comment.innerText = commentText
    comments.append(comment)
    form.querySelector('input').value = ''
}


document.addEventListener('DOMContentLoaded', () => {
    plus.addEventListener("click", increment);
    minus.addEventListener("click", decrement);
    pause.addEventListener("click", handlePause);
    like.addEventListener("click", handleLike);
    submit.addEventListener("click", handleSubmit);

    setInterval(() => {
        if (isRunning()) {
        increment()
        }
    }, 1000)
})