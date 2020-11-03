const counterDisplay = document.getElementById("counter")
//setInterval(function(){ alert("Hello"); }, 3000);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  setClock()
})


document.getElementById("plus").addEventListener("click", plus)
document.getElementById("minus").addEventListener("click", minus)
document.getElementById("heart").addEventListener("click", like)
document.getElementById("pause").addEventListener("click", pause)
document.getElementById("submit").addEventListener("click", comment)

const commentDiv = document.getElementById("list")
const commentunorderedList =  document.createElement("ul")

function setClock() {
 //console.log("innerHTML:" + counterDisplay.innerHTML)
  //your code to be executed after 1 second
  console.log("clock")
  timer = setTimeout(function() {
   if (counterDisplay.innerHTML < 100) {
     let newCounterDisplay = ++counterDisplay.innerHTML 
       counterDisplay.innerHTML = newCounterDisplay
       setClock()
     } else { 
    console.log("fin")
    }
 }, 1000);
}

function plus() {
	let newCounterDisplay = ++counterDisplay.innerHTML 	
	counterDisplay.innerHTML = newCounterDisplay
}

function minus() {
   let decrementedCounterDisplay = --counterDisplay.innerHTML 	
   decrementedCounterDisplay.innerHTML = newCounterDisplay
}

function pause() {
	console.log("pause")
	let pauseButton = document.getElementById("pause").innerHTML
	if (pauseButton == " pause ") {
			clearTimeout(timer)
			document.getElementById("pause").innerHTML = " resume "
	} else {
		    document.getElementById("pause").innerHTML = " pause "
           	setClock()
            console.log("resume")
	}
}

function like() {
	//set starting number
    //increment number
	//add ul digit to element

}

function comment(event) {
	  event.preventDefault()
      let listItem = commentDiv.appendChild(commentList)
      let commentText = document.getElementById("comment-input").value 
      let commentNode = document.createTextNode(commentText)

      listItem.appendChild(commentNode)
      document.getElementById("comment-form").reset()
}


