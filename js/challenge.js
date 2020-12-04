//update counter every second

//manually increment/decrement counter

//like a number on the counter, view number of likes for that number 

//pause the counter- pausing disables all other buttons and shows 'resume', when resume is clicked restart counter and enable other buttons again

//leave a comment 


// "use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var playing=!0,timer=function(){return setInterval(function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1},1e3)},interval=timer(),minus=document.getElementById("minus"),plus=document.getElementById("plus"),heart=document.getElementById("heart"),pause=document.getElementById("pause"),commentForm=document.getElementsByTagName("form")[0];minus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b-1}),plus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1}),heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});

let likesCounter = {}

document.addEventListener("DOMContentLoaded", () => {
  let counter = document.getElementById("counter");
  counter.textContent = 0;
  
  interval = window.setInterval( function () {
    counter.textContent++;
    likes.textContent = 0;
  }, 1000);

    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart");
    let likes = document.getElementById("likes");
    let pause = document.getElementById("pause");
    let submit = document.getElementById("submit");
    let list = document.getElementById("list");

    minus.addEventListener('click', function () {
        counter.textContent--;
    });

    plus.addEventListener('click', function () {
        counter.textContent++;
    });

    heart.addEventListener('click', function () {
        let number = counter.textContent;
        if (likesCounter[number]) {
            likes.textContent = likesCounter[number]++;
        }
        else  {
        likesCounter[number] = 1;
        likes.textContent++;
        }
    });

    pause.addEventListener('click', function () {

        if (pause.innerText === 'pause') {
            pause.innerText = 'resume';
            clearInterval(interval);

            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
        }

        else  {
            interval = window.setInterval( function () {
                counter.textContent++;
             }, 1000);
            pause.innerText = 'pause';

            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
        }
    });

    submit.addEventListener('click', function(e) {
        e.preventDefault();
        let comment = document.querySelector("#comment-form > input[type=text]").value;
        list.innerHTML += `<li>${comment}</li>`;
    });
});