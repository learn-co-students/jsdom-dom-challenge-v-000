const counterDisplay = document.getElementById("counter")
//setInterval(function(){ alert("Hello"); }, 3000);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  setClock()
})

document.getElementById("plus").addEventListener("click", plus)
document.getElementById("minus").addEventListener("click", minus)


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

	//listen for button click
	//increment innerHTML
	//set innerHTML
function plus() {
	let newCounterDisplay = ++counterDisplay.innerHTML 	
	counterDisplay.innerHTML = newCounterDisplay
}

function minus() {
	console.log("hello")
   let decrementedCounterDisplay = --counterDisplay.innerHTML 	
   decrementedCounterDisplay.innerHTML = newCounterDisplay
}