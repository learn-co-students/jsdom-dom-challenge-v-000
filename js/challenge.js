
//As a user, I should see the timer increment every second once the page has loaded.
let counter = document.getElementById('counter');
let currentCount = parseInt(counter.innerText);

function countIncrease() {
  currentCount += 1;
  counter.innerText = `${currentCount}`
};

function countDecrease() {
  currentCount -= 1;
  counter.innerText = `${currentCount}`
};

let timer = setInterval(countIncrease, 1000)


window.addEventListener("load", () => {
  timer;
})

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.
const plus = document.getElementById('plus');
plus.addEventListener('click', countIncrease);

const minus = document.getElementById('minus');
minus.addEventListener('click', countDecrease);

//As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
const heart = document.getElementById('heart');

heart.addEventListener('click', () => {
  //check to see if an element exists and up the span if it does
  if (!!document.getElementById(`like-${currentCount}`)) {
    let span = document.querySelector(`#like-${currentCount} > span`);
    let spanCount = parseInt(span.innerText);
    span.innerText = (spanCount += 1);

    //change 'time' to 'times' after going to 2
    if (spanCount == 2) {
      document.getElementById(`like-${currentCount}`).innerHTML += "s";
    }
  }
 
  //and if it doesn't exist
  else {
  const likeItem = document.createElement('li');
  document.querySelector('ul.likes').appendChild(likeItem);
  likeItem.setAttribute('id', `like-${currentCount}`);
  likeItem.innerHTML = `${currentCount} has been liked <span>1</span> time`;
  }
})

//As a user, I can pause the counter, which should:


const pause = document.getElementById('pause') 
pause.addEventListener('click', () => {
  if (pause.innerText == "pause") {
  //-- pause the counter
  clearInterval(timer);

  //-- disable all buttons except the pause button
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  submitButton.disabled = true;

  //-- switch the label on the button from "pause" to "resume"
  pause.innerText = "resume";
  }

  else {
//As a user, I should be able to click the "restart" button to restart the counter and re-enable the buttons.
  timer = setInterval(countIncrease, 1000)

  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  submitButton.disabled = false;

  pause.innerText = " pause "
  }
})



//As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

const submitButton = document.getElementById('submit')
const commentBox = document.getElementById('comment-input')

submitButton.addEventListener('click', function(event) {
  const commentStr = commentBox.value
  const commentPara = document.createElement('p');

  document.getElementById('list').appendChild(commentPara);
  commentPara.innerHTML = commentStr;
  event.preventDefault();
  commentBox.value = '';
    
})