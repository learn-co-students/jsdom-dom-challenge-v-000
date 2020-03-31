document.addEventListener("DOMContentLoaded", function(){
    let counter = document.getElementById("counter");
    let pause = document.getElementById("pause");
    let heart = document.getElementById("heart");
    let likes = document.querySelector(".likes");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let submit = document.getElementById("submit")
    let commentForm = document.getElementById("comment-form")
    
    let timerIsOn = 0;
    let t = setTimeout(timedCount, 1000); 
    var c = 0;


        function timedCount() {
            counter.innerHTML = `${c}`;
            c++;
            t = setTimeout(timedCount, 1000);
        };

        function stopCount() {
            clearTimeout(t);
            timerIsOn = 0;
        };

        function startCount() {
            if (!timerIsOn) {
              timerIsOn = 1;
              timedCount();
            }
          };

        pause.addEventListener("click", () => {
            if (pause.id == "pause"){
                stopCount ();
                disable();
                pause.id = "resume";
                pause.innerHTML = "resume";
            }
            else if (document.getElementById("resume")){
                startCount ();
                enable();
                pause.id = "pause";
                pause.innerHTML = "pause";
            }
        });

        heart.addEventListener("click", () => {
            para = document.createElement("p");
            const text = `${c} has a like.`;
            para.innerHTML = text;
            likes.appendChild(para);
        });

        function disable(){
            heart.disabled = true;
            plus.disabled = true;
            minus.disabled = true;
            submit.disabled = true;
            likes.disabled = true;
        };

        function enable(){
            heart.disabled = false;
            plus.disabled = false;
            minus.disabled = false;
            submit.disabled = false;
            likes.disabled = false;
        };

        commentForm.addEventListener("submit", function(event){
            event.preventDefault();
      
            let comment = document.getElementById("comment-input");
            const newComment = document.createElement("li");
      
            newComment.innerHTML = comment.value;
            document.getElementById("list").appendChild(newComment);
          });
});
