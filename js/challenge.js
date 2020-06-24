document.addEventListener("DOMContentLoaded", startDOMChallenge);

function startDOMChallenge(){
  let sec=0;

  let secMonitoring;
  startCounter();

  function startCounter(){
    secMonitoring = setInterval(updateCounter, 1000);
  }

  function stopCounter(){
    clearInterval(secMonitoring);
  }

  function increaseCounter (){
    return sec++;
  }

  function updateCounter(){
    document.getElementById("counter").innerText = increaseCounter();
  }


  document.getElementById("heart").addEventListener("click", ()=>{
    li = document.createElement("li")
    li.innerText = `${sec} has been clicked`;
    document.querySelector("ul.likes").appendChild(li);
  });

  document.getElementById("pause").addEventListener("click", ()=>{
    let list = document.getElementsByTagName("button");

    for (let button of list){
      if (button.id == "pause"){
        if(button.innerText == "pause"){
          stopCounter();
          button.innerText ="resume"
        }else{
          button.innerText ="pause";
          startCounter();
        }
      }else{
        button.disabled == true? button.disabled = false : button.disabled = true ;
      }
    }

  });
  document.getElementById("plus").addEventListener("click", ()=>{
    stopCounter();
    document.getElementById("counter").innerText = increaseCounter();
    setInterval(updateCounter, 1000);
  });

  document.getElementById("minus").addEventListener("click", (event)=>{
    document.getElementById("counter").innerText;
  });

}
// function startCounter(){
//   let secMonitoring= setInterval(function(){
//     document.getElementById("counter").innerText = sec++;
//   }, 1000);
// }
// function likesRegistration(){
//   document.getElementById("heart").addEventListener("click", createLikesLi);
// }
// function createLikesLi(){
//   li = document.createElement("li")
//   li.innerText = `${sec} has been clicked`;
//   document.querySelector("ul.likes").appendChild(li);
// }
// function pauseRegistration(){
//   document.getElementById("pause").addEventListener("click", pauseCounter);
// }
// function pauseCounter(){
//   let list = document.getElementsByTagName("button");
//   for (let button of list){
//     button.disabled=true;
//   }
//
// }
