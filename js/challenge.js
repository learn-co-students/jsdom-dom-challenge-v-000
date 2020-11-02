const counterDisplay = document.getElementById("counter")
//setInterval(function(){ alert("Hello"); }, 3000);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  setClock()
})

function setClock() {
 console.log("innerHTML:" + counterDisplay.innerHTML)
  setTimeout(function() {
  //your code to be executed after 1 second
   if (counterDisplay.innerHTML < 10) {
       //newCounterDisplay 
     let newCounterDisplay = ++counterDisplay.innerHTML 
       counterDisplay.innerHTML = newCounterDisplay
       setClock()
     } else { 
    console.log("fin")
    }
}, 1000);
}