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

let likes = document.createElement("h1")
const likeHolder = document.getElementsByClassName("likes")
likes.innerHTML = 0
document.body.appendChild(likes).setAttribute("id", "like")

function setClock() {
 //console.log("innerHTML:" + counterDisplay.innerHTML)
  //your code to be executed after 1 second
  console.log("clock")
  timer = setTimeout(function() {
   if (counterDisplay.innerHTML < 100) {
     let newCounterDisplay = ++counterDisplay.innerHTML 
       counterDisplay.innerHTML = newCounterDisplay
       likes.innerHTML = 0
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
	debugger
	//set starting number
    //increment number
	//add ul digit to element
    let approve = likes.innerHTML
    let newlikeCounter = ++approve
    likes.innerHTML = newlikeCounter

}

function comment(event) {
	  const listHolder = document.getElementById("list")
      const commentList =  document.createElement("li")
      let commentText = document.getElementById("comment-input").value 
      let commentNode = document.createTextNode(commentText)

	  event.preventDefault()
	  commentList.appendChild(commentNode)
      listHolder.appendChild(commentList)
      document.getElementById("comment-form").reset()
}


