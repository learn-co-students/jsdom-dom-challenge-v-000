// increment counter by 1 every second once the page has loaded


//find the value currently in the timer


let counterValue = parseInt(document.getElementById("counter").innerHTML, 10);

//increment that by one

let plusOne = counterValue + 1;

let minusOne = counterValue - 1;

//do thata every second on load
//document.addEventListener("DOMContentLoaded", () => {
//  setInterval(function counterThing(counterValue){
//    return counterValue + 1}, 1000);
//});

//increment timer by one
document.querySelector("#plus").addEventListener("plus", function(event){
  document.getElementById("counter").innerText =  plusOne;
  event.preventDefault();
}, false);

//makes the comment form work
//this actually works

document.querySelector("#comment-form").addEventListener("submit", function(event) {
         document.getElementById("list").innerHTML += document.getElementById("comment-input").value;
         document.getElementById("list").innerHTML +=  "<br />";
         event.preventDefault();
}, false);
