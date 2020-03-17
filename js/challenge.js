const likedNumbers = {}
let pauseButton = document.getElementById('pause')
let minusButton = document.getElementById('minus')
let plusButton = document.getElementById('plus')
let heartButton = document.getElementById('heart')
let submitButton = document.getElementById('submit')
let buttons = [minusButton, plusButton, submitButton, heartButton]
let comments = document.getElementById('list')
let ul = document.createElement('ul')
comments.appendChild(ul)
let input = document.getElementById('comment-input')

document.addEventListener('DOMContentLoaded', () => {

    
    const parsedNumber = () => {
        let number = document.getElementById('counter').innerText
        let parsedCounter = parseInt(number)
        return parsedCounter
    }
    
    
// 1) Code below encompasses the functionality of increasing counter by 1 every second and implementing it
    const counter = () => {
        let number = parsedNumber()
        number += 1
        document.getElementById('counter').innerText = number
    }
    let interval = setInterval(counter, 1000)

// 2) Next increment and decrement counter on clicking '+' or '-' buttons
    increment = document.getElementById('plus')
    decrement = document.getElementById('minus')

    increment.addEventListener('click', () => {
        counter()
    })

    decrement.addEventListener('click', () => {
        let number = parsedNumber()
        number -= 1
        document.getElementById('counter').innerText = number
    })
// 3) As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

    heartButton.addEventListener('click', () => {
        let int = parsedNumber()
        likedNumbers.hasOwnProperty(int) ? likedNumbers[int] += 1 : likedNumbers[int] = 1
        let lis = document.getElementsByTagName('li')
        lisArray = Array.from(lis)

        if (likedNumbers[int] === 1) {
            let li = document.createElement('li')
            li.innerText = `${int} has ${likedNumbers[int]} like(s)`
            let ul = document.querySelector('.likes')
            ul.appendChild(li)
        } else {
            lisArray.map(li => {
                if (li.innerText.startsWith(int.toString())) {
                    li.innerText = `${int} has ${likedNumbers[int]} like(s)`
                }
            })
        }
    })

// 4) As a user, I can pause the counter, which should: 
    // pause the counter
    // disable all buttons except the pause button 
    // the pause button should then show the text "resume."
    // When 'resume' is clicked, it should restart the counter and re-enable the buttons.
    
    pauseButton.addEventListener('click', () => {
        if (pauseButton.innerText === "pause") {
            clearInterval(interval)
            pauseButton.innerText = "resume"
            buttons.forEach(button => {
                button.disabled = true
            })
        } else {
            interval = setInterval(counter, 1000)
            pauseButton.innerText = "pause"
            buttons.forEach(button => {
                button.disabled = false
            })
        }
    })
        
// 5) As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
    
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        if (input.value) {
            addComment()
        }
        e.target.reset()
    })

    const addComment = () => {
        let comment = document.createElement('li')
        comment.innerText = input.value
        ul.appendChild(comment)
    } 
})
    
    




    

