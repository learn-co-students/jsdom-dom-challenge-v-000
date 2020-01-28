document.addEventListener('DOMContentLoaded', app(event));

function countUp(counter){
  setTimeout(cosole.log(""), 1000);
  return `${parseInt(counter.innerText) + 1}`;
}

function app(event){
  let counter = document.getElementById('counter');
  
}