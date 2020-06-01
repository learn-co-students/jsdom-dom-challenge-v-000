let likesCounter = {}

document.addEventListener("DOMContentLoaded", () => {

    let counter = document.getElementById("counter");
    
    counter.textContent = 0;
    
    myInterval = window.setInterval( function () {
        counter.textContent++;
        likes.textContent = 0;
     }, 1000);

    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let likes = document.getElementById("likes");
    let pause = document.getElementById("pause");
    let submit = document.getElementById("submit")
    let list = document.getElementById("list")

    minus.addEventListener('click', function () {
        counter.textContent--;
    });

    plus.addEventListener('click', function () {
        counter.textContent++;
    });

    heart.addEventListener('click', function () {
        let number = counter.textContent;
        if (likesCounter[number]) {
            likes.textContent = likesCounter[number]++
        }
        else  {
        likesCounter[number] = 1;
        likes.textContent++;
        }
        debugger
    });

    pause.addEventListener('click', function () {

        if (pause.innerText === 'pause') {
            pause.innerText = 'resume';
            clearInterval(myInterval);

            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
            submit.disabled = true
        }

        else  {
            myInterval = window.setInterval( function () {
                counter.textContent++;
             }, 1000);
            pause.innerText = 'pause';

            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
        }
    });

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value
        list.innerHTML += `<li>${comment}</li>`
    });



});