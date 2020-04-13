// increment counter by 1 every second once the page has loaded


//find the value currently in the timer


let counterValue = parseInt(document.getElementById("counter").innerHTML, 10);

let myCounter = setInterval(function() { document.getElementById("counter").innerText =  ++counterValue}, 1000)
//increment that by one


//make the timer work -- this works
//function myStartTime () {document.addEventListener("DOMContentLoaded", () => {
//  setInterval(function() { document.getElementById("counter").innerText =  ++counterValue}, 1000);
//});}

function myStartTime () {document.addEventListener("DOMContentLoaded", () => {
  myCounter;
});}

//make the pause button work
function pauseIt() {document.getElementById("pause").addEventListener("click", function(event) {
        clearInterval(myCounter);
});}

//increment timer by one

function autoIncrement () {document.getElementById("plus").addEventListener("click", function(event){
  document.getElementById("counter").innerText =  ++counterValue;
});}


//decrement timer
function autoDecrement() {document.getElementById("minus").addEventListener("click", function(event){
  document.getElementById("counter").innerText =  --counterValue;
});}

function commentWork() {document.querySelector("#comment-form").addEventListener("submit", function(event) {
         document.getElementById("list").innerHTML += document.getElementById("comment-input").value;
         document.getElementById("list").innerHTML +=  "<br />";
         event.preventDefault();
}, false);}


autoIncrement();
myStartTime();
autoDecrement();
pauseIt();
commentWork();

//makes the comment form work
//this actually works
