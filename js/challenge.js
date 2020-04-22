// function incrementCounter () { counter.innerText = parseInt(counter.innerText) + this; }
// Note: I need to look up how "this" works. In the function above, "this" is 1 or -1.
// Another note: This only works because 1 and -1 happen to be objects; I doubt that this is the best way.
// Wait, how did that work? How can that function see the counter?
// Update: This is from when I did plus/minus.addEventListener('click', incrementCounter.bind(1), false);
/* Update 2: The answer to this riddle is that the counter in incrementCounter is NOT the counter in the event listener.
   It turns out that, at least in IE/Edge and Chrome, whenever you make an element with an id, you can
   directly access it from the console with window.element_id_name or just element_id_name. 
   That is, unless the id has hyphens in it; then you'll get a Syntax Error. 
   This is NOT recommended!!! Better to use getElementById. 
   This article explains more: https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables
*/

document.addEventListener("DOMContentLoaded", function () {
  function incrementCounter (inc) {
    counterNumber += inc;
    counter.innerText = counterNumber;
  }

  function disableButtons (trueOrFalse) {
    // Enable or disable all buttons except the pause button 
    // (I can still write a comment, but not submit it)
    minus.disabled = trueOrFalse;
    plus.disabled = trueOrFalse;
    heart.disabled = trueOrFalse;
    submitButton.disabled = trueOrFalse;
  }

  function startTimer () { // Increment the counter by 1 every 1000ms
    return setInterval(incrementCounter, 1000, 1);
  }

  // Counter-related elements
  const counter = document.getElementById('counter');
  let counterNumber = parseInt(counter.innerText);
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');

  // Comment elements
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const list = document.getElementById('list');
  const submitButton = document.getElementById('submit');

  // Heart-related elements
  const heart = document.getElementById('heart');
  const likes = document.querySelector('ul.likes');

  // Timer-related elements
  const pauseButton = document.getElementById('pause');
  let timer = startTimer();

  pauseButton.addEventListener('click', function () {
    if (pauseButton.textContent == " pause ") { // Pause the timer, disable buttons
      clearInterval(timer);
      disableButtons(true);
      pauseButton.textContent = "resume";
    }
    else { // Resume the timer, enable buttons
      timer = startTimer();
      disableButtons(false);
      pauseButton.textContent = " pause ";
    }
  }, false);

  plus.addEventListener('click', function () { incrementCounter(1) }, false);
  minus.addEventListener('click', function () { incrementCounter(-1) }, false);
  
  commentForm.addEventListener('submit', function (event) {
    const newComment = document.createElement('p');

    newComment.textContent = commentInput.value;
    list.appendChild(newComment);
    commentInput.value = "";

    event.preventDefault();
  });

  heart.addEventListener('click', function () {
    // <li>${number} has been liked ${x} times.</li>
    // I need to keep track of the counter number (counter.innerText), AND how many times it's been liked.
      // If that counter number has been liked at least once, then increment the number of times it's been liked by one, and say 'times'.
      // I'll need to find that specific li that has that counter number.
      // If that counter number has NEVER been liked, then it should be increased from 0 to 1 and say that it's been liked 1 "time".

    // Should I iterate through those likeMessages and try to find one that starts with counterNumber?
    // Or is it better to use querySelector and give each new likeMessage a unique piece of data,
    // like <li data-num = "28"> ?
    // Update: I can't use find() on a NodeList, only an array. But I can convert it to an array!

    // Solution 1: 
    // const likeMessages = Array.from(likes.querySelectorAll('li'));
    // let likeMessage = likeMessages.find( message => message.textContent.startsWith(counterNumber) );

    // Solution 2 (I think this one is cleaner):
    let likeMessage = likes.querySelector(`li[data-counter="${counterNumber}"]`);
    let timesLiked; // Solutions 1 and 2 use this.

    if (likeMessage == undefined) { // The counterNumber has never been liked.
      // Build the pieces of the likeMessage.
      likeMessage = document.createElement('li');
      timesLiked = document.createElement('span');
      timesLiked.textContent = 1;
      
      // Solution 2 adds this:
      likeMessage.setAttribute('data-counter', counterNumber);

      // Put together the likeMessage.
      likeMessage.textContent = `${counterNumber} has been liked `;
      likeMessage.appendChild(timesLiked);
      likeMessage.innerHTML += " time";

      likes.appendChild(likeMessage);
    }
    else { // counterNumber has been liked at least once.
      timesLiked = likeMessage.querySelector('span');
      timesLiked.textContent = parseInt(timesLiked.textContent) + 1;
      
      if (likeMessage.innerHTML.endsWith("time")) {
        likeMessage.innerHTML = likeMessage.innerHTML.concat("s");
      }
    }
  }, false); // End of heart.addEventListener
  
}, false); // End of document.addEventListener


/* I think I should do it in this order:
  1. Implement the + and - buttons. CHECK!
  2. Implement the heart button. CHECK! (Also, I think Solution 2 is cleaner.)
    a. This should add a list item: (counter number) has been liked (x) times.
    b. It should NOT add an additional list item if the user likes the same number multiple times. Instead, increment (x).
  3. Implement the "leave a comment" feature. Check!
  4. Implement the timer. Check!
  5. Implement the pause button, which stops the timer, heart, counter buttons, and submit (not the actual writing of a comment).
    a. It should toggle between "pause" and "resume".
  ^^^ Check!
*/