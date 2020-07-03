let seconds = 0;
let counter = document.getElementById("counter");
let pauseButton = document.getElementById("pause");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById('plus');
let likeButton = document.getElementById('heart');
let form = document.getElementById('comment-form');
let status = true;
let timer = setInterval(incrementSeconds, 1000)

function incrementSeconds() {
    seconds ++;
    counter.innerHTML =  seconds;
    return seconds;
}

function decrementSeconds() {
  seconds --;
  counter.innerHTML = seconds;
  return seconds;
}

function buildList() {
  let likesListItem = document.createElement("li");
  let likesListItemValue = document.createTextNode(seconds);
  let like = document.getElementsByClassName("likes");
  likesListItem.setAttribute("class", "like");
  likesListItem.appendChild(likesListItemValue);
  like[0].appendChild(likesListItem);
}

function comment(event) {
  event.preventDefault();
  let commentListItem = document.createElement("li");
  let commentValue = document.getElementById("comment-input").value;
  let commentValueItem = document.createTextNode(commentValue);
  let comment = document.getElementsByTagName("h3");
  let p = document.createElement("p");

  commentListItem.setAttribute("class", "comment");
  commentListItem.appendChild(commentValueItem);
  comment[0].appendChild(p);
  p.appendChild(commentListItem);

}

pauseButton.addEventListener("click", function(){
  if (!status){
    pauseButton.innerHTML = "pause";
    timer = setInterval(incrementSeconds, 1000);
  } if (status){
    pauseButton.innerHTML = "start";
    clearInterval(timer);
  }
  status = !status;
})

plusButton.addEventListener("click", function(){
  incrementSeconds();
})

minusButton.addEventListener("click", function(){
  decrementSeconds();
})

likeButton.addEventListener("click", function(){
  buildList();
})

form.addEventListener("submit", comment, true);
