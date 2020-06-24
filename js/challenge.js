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
    return ++sec;
  }
  function decreaseCounter(){
    return sec >0? --sec : 0 ;
  }

  function updateCounter(){
    document.getElementById("counter").innerText = increaseCounter();
  }


  document.getElementById("heart").addEventListener("click", ()=>{
    if (document.getElementById(sec)){
      li = document.createElement("li");
      li.setAttribute("id", sec);
      li.innerText = `${sec} has been clicked`;
      document.querySelector("ul.likes").appendChild(li);
    }else{
      li = document.createElement("li");
      li.setAttribute("id", sec);
      li.innerText = `${sec} has been clicked`;
      document.querySelector("ul.likes").appendChild(li);
    }
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
    startCounter();
  });
  document.getElementById("minus").addEventListener("click", ()=>{
    stopCounter();
    document.getElementById("counter").innerText = decreaseCounter();
    startCounter();
  });

}
