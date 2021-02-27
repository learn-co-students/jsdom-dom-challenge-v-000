document.addEventListener("DOMContentLoaded", ()=>{
  
  // Timer Code n Lagic //
  const counterNode = document.querySelector("#counter")
  let counterNum = 0
  let counterIsPaused = false

  startCounter()

  function startCounter() {
    setInterval(()=>{ if (!counterIsPaused) {updateCounter()} }, 1000)
  }

  function updateCounter(override=false, func=()=>{}) {
    if (override === true) {
      func()
    } else {
      counterNum++
    }
    counterNode.innerText = counterNum
  }

  document.querySelector("#minus").addEventListener("click", () => { updateCounter(true, () => {counterNum--} )})
  document.querySelector("#plus").addEventListener("click", () => { updateCounter(true, () => {counterNum++} )})
  
  // Timer pause button //
  document.querySelector("#pause").addEventListener("click", (event)=>{
    if (event.target.innerText === "pause") {
      event.target.innerText = "resume"
      document.querySelector("#plus").disabled = true
      document.querySelector("#minus").disabled = true
      counterIsPaused = true
    } else if (event.target.innerText === "resume") {
      event.target.innerText = "pause"
      document.querySelector("#plus").disabled = false
      document.querySelector("#minus").disabled = false
      counterIsPaused = false
    }
   })

  // Much Like //

  document.querySelector("#heart").addEventListener("click", ()=>{
    // Like button has been clicked:
    const likeList = document.querySelector("ul.likes")
    const likesList = document.querySelectorAll("ul.likes li")

    updateOrCreateLikeForNumber(counterNum)

    // Support functions //
    function updateOrCreateLikeForNumber(number) {
      const like = likeExistsForNumber(number)
      if (like) {
        like.innerText = generateTextForLike(like)
      } else {
        createNewLikeForNumber(number)
      }
    }

    function createNewLikeForNumber(number) {
      const newLike = document.createElement("li")
      newLike.innerText = generateTextForLike(newLike, number)
      likeList.appendChild(newLike)
    }
    
    function likeExistsForNumber(number) {
      for (let i = 0; i < likesList.length; i++) {
        const like = likesList[i]
        const likeData = parseTextForLike(like)

        if (likeData.number === number) {
          return like
        }
      }
      return false
    }
    
    function parseTextForLike(likeNode) {
      // Regex'ing the numbers in the string.
      const nodeData = likeNode.innerText.match(/(\d+)/gm) //=> should return ["likedNumber", "likeCount"]
      return { number: parseInt(nodeData[0]), count: parseInt(nodeData[1])}
    }

    function generateTextForLike(like, number=null) {
      // Number is only provided if we are created a new like
      if (number) {
        return `${number} has been liked 1 time`
      } else {
      // The like already exists and is not new
        const likeData = parseTextForLike(like)
        return `${likeData.number} has been liked ${likeData.count += 1} times`
      }
    }
  }); //End of like event listener

  // Leave a comment below //

  document.querySelector("#comment-form").addEventListener("submit", (event)=> {
    const newComment = document.createElement("p")
    newComment.innerText = event.target.comment.value
    document.querySelector("#list.comments").appendChild(newComment)
    event.target.comment.value = ""
    event.preventDefault()
  })
  
});
