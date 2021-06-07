
let count = 0;
const counter_element = document.getElementById('counter');
const minus_element = document.getElementById('minus');
const plus_element = document.getElementById('plus');
const heart_element = document.getElementById('heart');
const pause_element = document.getElementById('pause');

let timer = true;

setInterval(function () {
  if (timer) {
    counter_element.innerText++;
  }
}, 1000);

pause_element.addEventListener("click",()=>{
    if (timer) {
        timer = false;
        pause.innerText = "Continue"
      } else {
        timer = true;
        pause.innerText = "Pause"
      }
});
plus_element.addEventListener("click",()=>{
    if (timer) {
        counter_element.innerHTML = count++;
    }
});
minus_element.addEventListener("click",()=>{
   if (timer) {
        counter_element.innerHTML = count--;
    }
});