//grab all the necessary DOM elements

//form and relevant input fields
const newCommentForm = document.getElementById("comment-form")
const newCommentInput = document.getElementById('comment-input')

//ol where new comments will live on the DOM
const newCommentListDiv = document.getElementById("list");
//creating and appending a list
const newCommentOL = document.createElement('ol');
document.getElementById(newCommentListDiv).appendChild(newCommentOL)


//attach event listeners
newTaskForm.addEventListener("submit", createNewComment);


const createNewComment = event => {
    event.preventDefault();
    //stop form from trying to submit
    const newCommentInput = document.getElementById("new-task-description");
    const newComment = document.createElement('li');
    //creating a new list element within this scope from the input of the comment form.
    newComment.innerText = newCommentInput.value;

    appendNewComment(newComment);
    event.target.reset();
}

//variableType variableName = htmlInputTagName => {} easier function?
const appendNewComment = comment => {
    document.getElementById("list").appendChild(comment);
};