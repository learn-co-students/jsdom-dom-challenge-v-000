let counterVal = 0
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let counter = document.getElementById('counter')
let heart = document.getElementById('heart')
let list = document.getElementById('list')
let form = document.getElementById('comment-form')


plus.addEventListener('click', increaseCount )
minus.addEventListener('click', decreaseCount )
heart.addEventListener('click', increaseCount )
form.addEventListener('submit', function (e){
    e.preventDefault();
    addComment()
    console.log('hello')
});



function increaseCount() {
    counterVal += 1
    counter.innerHTML = counterVal
}

function decreaseCount() {
    counterVal -= 1
    counter.innerHTML = counterVal
}

function addComment() {
    let comment = document.getElementById('comment-input').value
    let content = document.createElement('div')
    content.innerHTML = `${comment}<br>`
    list.appendChild(content)
};