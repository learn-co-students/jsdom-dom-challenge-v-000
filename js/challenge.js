// Initial Counter Increment
document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById('counter');
    let counterValue = parseInt(counter.innerText);
    let pauseBtn = document.getElementById('pause');
    let isPaused = false;

    pauseBtn.onclick = function() {
        if (!isPaused) {
            isPaused = true;
            pauseBtn.innerText = 'resume';
        } else {
            isPaused = false;
            pauseBtn.innerText = 'pause';
        }
        
    }
  
    let counterDefault = setInterval(() => counterDefaultIncrement(), 1000);

    function counterDefaultIncrement() {
        if (!isPaused) {
            counterValue += 1;
            counter.innerText = counterValue;
        } 
    }

    function counterPlus() {
        let incBtn = document.getElementById("plus");
        incBtn.onclick =  function() {counterIncr()};

        function counterIncr() {
            if (!isPaused) {
                counterValue += 1;
                counter.innerText = counterValue;
            }
        }
    }

    function counterMinus() {
        let decBtn = document.getElementById("minus");
        decBtn.onclick =  function() {counterDec()};

        function counterDec() {
            if (!isPaused) {
                counterValue -= 1;
                counter.innerText = counterValue;
            }
        }
    }

    let likedBtn = document.getElementById('heart');
    likedBtn.onclick = function(){
        if (!isPaused) {
            likeAdd()
        }
    };

    function likeAdd() {
        let likeContainer = document.querySelector('ul.likes');
        let li = document.createElement('li');
        let dataNums = document.querySelector(`[data-num='${counterValue}']`);

        if (dataNums) {
            let likeCount = parseInt(dataNums.querySelector("span").innerText);
            likeCount += 1;
            dataNums.innerHTML = `${counterValue}` + " has been liked " + `<span>${likeCount}</span>` + " times"      

        } else {
            let likeCount = 1;
            li.dataset.num = counterValue;
            li.innerHTML = `${counterValue}` + " has been liked " + `<span>${likeCount}</span>` + " time"
            likeContainer.appendChild(li);
            
        }
    }


    counterPlus();
    counterMinus()

    function createTask(event) {
        let submit = document.getElementById('submit');
        submit.addEventListener("click", function(event) {
          event.preventDefault();
    
          let comment = document.querySelector("#comment-input").value;
          let p = document.createElement("p");
          p.innerHTML = comment;
          
          let commentList = document.getElementById("list");
          commentList.appendChild(p);
          
          document.getElementById('comment-form').reset();
        
        });
    }
    
    createTask();

    

})