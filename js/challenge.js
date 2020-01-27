//initial count
let count = 0;
let intervalID;

//counter
const timer = document.getElementById("counter");

//minus button
const minus = document.getElementById("minus");

//plus button
const plus = document.getElementById("plus");

//heart button
const heart = document.getElementById("heart");

//heart list
const likeList = document.getElementsByClassName("likes")[0];

//pause-resume buttons container
const pauseResumeButtons = document.getElementById("pause-resume");

//pause button
const pause = document.createElement("button");
pause.setAttribute("id", "pause");
pause.innerText = "pause";

//resume button
const resume = document.createElement("button");
resume.setAttribute("id", "resume")
resume.innerText = "resume";

//comment input
const commentInput = document.getElementById("comment-input");

//comment submit button
const commentSubmitButton = document.getElementById("submit");

//comment list
const commentList = document.getElementById("list");


function startTimer() {
  intervalID = setInterval(function() {
    count += 1;
    timer.textContent = count;
  }, 1000);
};

document.addEventListener("DOMContentLoaded", function() {
  pauseResumeButtons.appendChild(pause);
  startTimer()
});

minus.addEventListener("click", function() {
  count -= 2;
});

plus.addEventListener("click", function() {
  count += 1;
});

heart.addEventListener("click", function() {
  if (document.getElementById(`liked-${count}`) == null) {
    let listElement = document.createElement("li");
    listElement.innerHTML = `<li>${count} has been liked <span id="liked-${count}">1</span> <span id="times-${count}">time</span></li>`;
    likeList.appendChild(listElement);
  } else {
    let numberOfLikes = document.getElementById(`liked-${count}`);
    let times = document.getElementById(`times-${count}`);
    numberOfLikes.innerText = parseInt(numberOfLikes.innerText) + 1;
    times.innerText = "times";
  };
});

pause.addEventListener("click", function() {
  clearInterval(intervalID);
  pause.remove();
  pauseResumeButtons.appendChild(resume);
});

resume.addEventListener("click", function(){
  startTimer();
  resume.remove();
  pauseResumeButtons.appendChild(pause);
});

commentSubmitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const comment = document.createElement("p");
  comment.innerHTML= commentInput.value;
  commentList.appendChild(comment);
});