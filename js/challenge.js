let likesCounter = {}

document.addEventListener("DOMContentLoaded", () => {
    var counterElement = document.getElementById("counter")
    
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    let commentForm = document.getElementById("comment-form")
    let submit = document.getElementById("submit")

    currentInterval = window.setInterval( function () {
        counterElement.textContent++;
    }, 1000);

    plus.addEventListener("click", (event) => { 
      event.preventDefault()
      increment(counterElement) 
    }, false);
    
    minus.addEventListener("click", (event) => { 
      event.preventDefault()
      decrement(counterElement)
    }, false);

    heart.addEventListener("click", (event) => {
       incrementLike(counterElement.textContent) 
    }, false)

    pause.addEventListener("click", (event) => {
    //    debugger
       let value = event.currentTarget.textContent
        
        if(value === " pause ") {
            pause.textContent = " resume "
            clearInterval(currentInterval) 

            plus.disabled = true
            minus.disabled = true
            heart.disabled = true
            submit.disabled = true
        } else {
            counterElement.textContent = 0
            
            currentInterval = window.setInterval( function () {
                counterElement.textContent++;
            }, 1000);

            pause.textContent = " pause "
            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            submit.disabled = false
       }
    }, false)

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault()
        let comment = event.target[0].value
        postComment(comment)
    })

});

function increment(element) {
    element.textContent++
}

function decrement(element) {
    element.textContent--
}

function postComment(text) {
    let commentList = document.getElementById("list")
    let li = document.createElement("li")
        li.innerText = text

    commentList.appendChild(li)
}

function incrementLike(number) {
    let likes = document.getElementsByClassName("likes")

    if (likesCounter[number]) {
        likesCounter[number]++

        let existingNumberEl = document.getElementById(`${number}`)
            existingNumberEl.innerText = `${number} has ${likesCounter[number]} likes!`
    } else {
       // debugger
        likesCounter[number] = 1

        let li = document.createElement("li")
            li.setAttribute("id", `${number}`)
            li.innerText = `${number} has ${likesCounter[number]} like!` 

        likes[0].appendChild(li)
    }
    
}