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
  // Counter-related elements
  const counter = document.getElementById('counter');
  let counterNumber = parseInt(counter.innerText);
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');

  // Comment elements
  const commentForm = document.getElementById('comment-form');
  const commentInput = document.getElementById('comment-input');
  const list = document.getElementById('list');

  // Heart-related elements
  const heart = document.getElementById('heart');
  const likes = document.querySelector('ul.likes');

  function incrementCounter (inc) {
    counterNumber += inc;
    counter.innerText = counterNumber;
  }

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
    const likeMessage = document.createElement('li');
    likeMessage.textContent = `${counterNumber} has been liked so-and-so times`;

    likes.appendChild(likeMessage);
  }, false);
  
}, false);


/* I think I should do it in this order:
  1. Implement the + and - buttons. CHECK!
  2. Implement the heart button.
    a. This should add a list item: (counter number) has been liked (x) times.
    b. It should NOT add an additional list item if the user likes the same number multiple times. Instead, increment (x).
  3. Implement the "leave a comment" feature. Check!
  4. Implement the timer.
  5. Implement the pause button, which stops the timer, heart, counter buttons, and submit (not the actual writing of a comment).
    a. It should toggle between "pause" and "resume". 
*/