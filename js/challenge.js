let timer = document.getElementById("counter");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let sumit = document.getElementById("sumit");
let likes = document.getElementsByClassName("likes")[0];
let inputBox = document.getElementById("comment-input");
let body = document.getElementsByTagName("body");

let timeTicker;

let comments = document.createElement("ul");
let liMaker = () => document.createElement("li");

let changeTime = (timer, method) =>{
    let time = parseInt(timer.innerText);
    let addTime = () => timer.innerText = time + 1;
    let subtractTime = () => timer.innerText = time - 1;
    method == "add" ? addTime() : subtractTime();
};
let likeAction = () =>{
    let time = parseInt(timer.innerText);
    let li;
    let classValue;
    if (document.getElementById(`${time}`) === null){
        li = liMaker();
        li.id = time;
        classValue = 1;
    }else{
        li = document.getElementById(`${time}`);
        classValue = parseInt(li.class);
        classValue++;
    }
    li.class = classValue;
    let times = classValue === 1 ? "time" : "times";
    li.innerText = `The number ${time} has been liked ${classValue} ${times}`;
    likes.appendChild(li);
};
let commentAction = () => {
    let li = liMaker();
    li.innerText = inputBox.value;
    comments.appendChild(li);
    body[0].appendChild(comments);
};
let pauseTimer = () => {
    removeInterfaceListeners();
    window.clearInterval(timeTicker);
    pause.innerText = "resume";
};
let startTimer = () => {
    addInterfaceListeners();
    timeTicker = window.setInterval(() => changeTime(timer, "add"), 1000);
    pause.innerText = "pause";
};

let decrementTime = () => changeTime(timer, "subtract");
let incrementTime = () => changeTime(timer, "add");
let interfaceBtns = [minus, plus, heart];
let interfaceListeners = [decrementTime, incrementTime, likeAction];

let addInterfaceListeners = () => {
    for (let i = 0; i < interfaceBtns.length; i++){
        interfaceBtns[i].addEventListener("click", interfaceListeners[i]);
    }};
let removeInterfaceListeners = () => {
    for (let i = 0; i < interfaceBtns.length; i++){
        interfaceBtns[i].removeEventListener("click", interfaceListeners[i]);
    }};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    commentAction();
    inputBox.value = "";
});
pause.addEventListener("click", () => pause.innerText == "pause" ? pauseTimer() : startTimer());


startTimer();
