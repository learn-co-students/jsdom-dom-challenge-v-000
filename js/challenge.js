document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById('counter')
    const plus = document.getElementById('+')
    const minus = document.getElementById('-')
    const pause = document.getElementById('pause')
    const like = document.getElementById('<3')
    const likes = document.getElementsByClassName('likes')[0]
    const submit = document.getElementById('submit')
    const commentForm = document.getElementsByTagName('input')[0]
    const comments = document.getElementById('list')
    let gameRunning = true
 
    var interval = setInterval(every1sec, 1000);
    var i = 0 

    function every1sec() { 
    counter.innerText = i++; 
    }

    every1sec ();

    pause.addEventListener('click', function()  {
    if (pause.innerText == 'pause') {
        clearInterval(interval)
        pause.innerText = 'resume' 
        plus.disabled = true;
        minus.disabled = true;
        like.disabled = true;
}   else {
        interval = setInterval(every1sec, 1000);
        pause.innerText = 'resume'
        plus.disabled = false;
        minus.disabled = false;
        like.disabled = false;
}

    })

   });