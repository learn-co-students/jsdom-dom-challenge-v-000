const form = document.getElementById("comment-form");
const timerText = document.getElementById("counter"); //counter in h1 - element that holds actual number 
const pause = document.getElementById("pause"); 
const minus = document.getElementById("minus"); 
const plus = document.getElementById("plus"); 
const buttons = document.getElementsByTagName("button");
const heart = document.getElementById("heart");
const commentsSection = document.getElementsByClassName("comments")[0];
let count = 0;
let intervalID; 
let buttonsArray = [];
let currentCount = timerText.innerHTML;
let paused = false;

for (let i=0;i<buttons.length;i++){
    if (buttons[i].id != "pause"){
        buttonsArray.push(buttons[i]);
    };
};

document.addEventListener('DOMContentLoaded', (event) => {
    intervalID = setInterval(startCount, 1000);
});

function startCount(){
    count += 1;
    timerText.textContent = count;
    currentCount = timerText.innerHTML;
};

function disableButton(button){
  button.setAttribute("disabled", true);
};

function replacePause(){
    if (!paused){
    pause.textContent = "resume";}

    if (paused){
    pause.textContent= "pause";
    }
}

function enableButton(button){
    button.removeAttribute("disabled");
  };

pause.addEventListener("click", function(){
    // paused == state controller
    // am i paused or not? 
    // assuming we started unpaused...
    if (paused==false){
        clearInterval(intervalID);
        
        buttonsArray.forEach(button=> {
            disableButton(button)
        })

        replacePause()

    }
    // now, if we are already paused
    if (paused)
      {

        console.log("You are resuming!")
        // resume count
        intervalID = setInterval(startCount, 1000);
        // replace button language
        replacePause()
        // enabled the buttons in for loop
        buttonsArray.forEach(button=>{
            enableButton(button)
        })

    }
        // here, since we have performed all pausing actions
        // we set paused to its opposite, true.
    paused = !paused

});

minus.addEventListener("click", function(){
    count--
    timerText.innerText = count
});

plus.addEventListener("click", function(){
    count++
    timerText.innerText = count
});

heart.addEventListener("click", like);

function like() {
  let newLike = document.createElement("li");
  let list = document.getElementsByClassName("likes")[0];  // like = see the count of the number of 'likes' associated with that number displayed.
  newLike.dataset.counter = count
  let newCounter = 0

  if (newLike.dataset.counter == count) {
    newCounter++ 
    newLike.innerHTML = `${timerText.innerHTML} has been liked ${newCounter} times.`
  }

  list.appendChild(newLike)
};

form.addEventListener("submit", createNewComment);

function createNewComment(event) {
    event.preventDefault();  //stop form from trying to submit
    const comment = document.getElementById("comment-input");
    const addComment = document.createElement("p");
    addComment.innerHTML = comment.value;

    commentsSection.appendChild(addComment);
};



