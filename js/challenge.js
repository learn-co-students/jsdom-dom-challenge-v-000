document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter")
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let likes = document.getElementsByClassName("likes")[0]
    let pause = document.getElementById("pause")
    let comments = document.getElementById("submit")
    let comment = document.getElementById("comment-input")
    let post = document.getElementById("list")


    var oneSecondCounter = setInterval(timer, 1000);

    minus.addEventListener("click", subtract);
    plus.onclick = function() {add()};
    heart.addEventListener("click", like);
    pause.addEventListener("click", takePause);
    comments.addEventListener("click", function(e) {
        e.preventDefault();
        let node = document.createElement("LI");
        let textnode = document.createTextNode(comment.value);
        node.appendChild(textnode);
        post.appendChild(node);
    });


    function timer() {
        if (paused()) {}
        else{
            counter.innerHTML++;
        }
    }

    function subtract() {
        if (paused()) {}
        else {
            counter.innerHTML--;
        }
    }

    function add() {
        if (paused()) {}
        else {
            counter.innerHTML++;
        }
    }

    function like() {
        if (paused()) {}
        else {
            let node = document.createElement("LI");
            let textnode = document.createTextNode(counter.innerHTML);
            node.appendChild(textnode);
            likes.appendChild(node);
        }
    }

    function takePause() {
        let current = pause.innerHTML;
        if (current == "resume"){
            pause.innerHTML = "pause";
        }
        else {
            pause.innerHTML = "resume";
        }
    }

    function paused() {
        let current = pause.innerHTML;
        if (current == "resume"){
           return true;
        }
        else {
            return false;
        }
    }
})