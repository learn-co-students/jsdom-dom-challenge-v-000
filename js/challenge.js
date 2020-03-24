function oneSecIncrementer() {
  setInterval(function(){
    let pause = document.getElementById('pause')
    if(pause.innerText == "pause"){
      let counter = document.getElementById('counter');
      counter.innerHTML++;
    }
  }, 1000);
}
window.onload = oneSecIncrementer();

const minus = document.getElementById('minus');
minus.addEventListener('click', function() {
  counter.innerHTML--;
});

const plus = document.getElementById('plus');
plus.addEventListener('click', function() {
  counter.innerHTML++;
});

document.addEventListener ('DOMContentLoaded', function(){
  const heart = document.getElementById('heart');
  let numbersLiked = {};
  // <ul class='likes'></ul>
  let likesUL = document.getElementsByClassName('likes')[0];

  heart.addEventListener('click', function(event){

    // creates li with an ID
    let li = document.createElement("li");
    let likedNum = counter.innerText;
    li.id = likedNum;

    // check to see if UL has anything in it
    // if it does have children
    if (likesUL.children) {
      // look for children with matching ids
      // if it does have matching ids
      if (numbersLiked[likedNum]) {
        let existingLikes = likesUL.children.namedItem(likedNum);
        numbersLiked[likedNum]++;

        //find and replace the li with the same id
        let oldLI = document.getElementById(likedNum);
        oldLI.innerHTML = counter.innerText + ' has been liked ' + numbersLiked[likedNum] + ' times';
      }
      // if there are no matching ids
      else{
        li.innerHTML = counter.innerText + ' has been liked 1 time';
        likesUL.appendChild(li);
        numbersLiked[likedNum] = 1;
      }
    }
    // if it doesnt have children, add the first child
    else {
      li.innerHTML = counter.innerText + ' has been liked 1 time';
      likesUL.appendChild(li);
      numbersLiked[likedNum] = 1;
    }
  });
});

const form = document.getElementById('comment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.getElementById('comment-input');

  // might need to change to some other tag besides li
  let p = document.createElement("p");
  p.innerHTML = input.value;
  document.getElementById('list').appendChild(p);
});

const pause = document.getElementById('pause');
pause.addEventListener('click', function() {
  if (pause.innerText == 'pause'){
    pause.innerText = 'resume';
    // set all other buttons on disabled
    document.getElementById("submit").disabled = true;
    document.getElementById("heart").disabled = true;
    document.getElementById("plus").disabled = true;
    document.getElementById("minus").disabled = true;
  }
  else {
    pause.innerText = 'pause';
    // set all other buttons on enabled
    document.getElementById("submit").disabled = false;
    document.getElementById("heart").disabled = false;
    document.getElementById("plus").disabled = false;
    document.getElementById("minus").disabled = false;
  }
});
