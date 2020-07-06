const counterExpression = document.getElementById("counter");
const buttonMinus = document.getElementById("minus");
const buttonPlus = document.getElementById("plus");
const heartMark = document.getElementById("heart");
const buttonPause = document.getElementById("pause");

const likesUl = document.querySelector("ul");
const newLike = document.createElement("li");

const timer = window.onload = function(){
    let plusValue = parseInt(counterExpression.innerText)
    plusValue += 1;
    counterExpression.innerText = String(plusValue);
    setTimeout(timer, 1000);
};

const incrementValue = buttonPlus.addEventListener("click", function(){
    let plusValue = parseInt(counterExpression.innerText)
    plusValue += 1
    counterExpression.innerText = String(plusValue);
});

const decrementalValue = buttonMinus.addEventListener("click", function(){
    let minusValue = parseInt(counterExpression.innerText)
    minusValue -= 1
    counterExpression.innerText = String(minusValue);
});

const likeCounter = heartMark.addEventListener("click", function(){
    let value = 1
    newLike.innerText = counterExpression.innerText +" has been liked " + value + " time";
    likesUl.appendChild(newLike);
})
    

