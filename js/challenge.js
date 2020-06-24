document.addEventListener("DOMContentLoaded", ()=>{

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
    let heartLi = document.createElement("li");
    //heartLi.setAttribute("id", sec);
    heartLi.innerText = `${sec} has been clicked 1 time`;
    document.querySelector("ul.likes").appendChild(heartLi);
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

  document.getElementById("submit").addEventListener("click", (event)=>{
    let comment = document.getElementById("comment-input").value;
    if (comment.trim() !=""){
      let list = document.getElementById("list");
      let commentLi = document.createElement("li");
      commentLi.innerText = comment;
      list.appendChild(commentLi);
      document.getElementById("comment-input").value ="";
    }else{
      alert("Comment field cannot be blank!");
    }
    event.preventDefault();
  });
});
