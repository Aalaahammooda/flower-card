// Download 4 images
// Rename them to something simple
// Put them in the images directory

// Create the HTML with the grid (4 cards covered)

// Work on javascript
// Create a grid/gameboard using an array
// Call on a function that will put random images in the array


//globle varible
const cards = document.querySelectorAll(".box")
const restart = document.querySelector("#restart")

let firstCard = null
let secondCard = null

let firstCover = null
let secondCover = null

let cardContainer = null

//function to start game 
const startGame = () => {
  flipEventListeners()
  
  
}

// add eventListeners
const flipEventListeners = () => {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard)
  })
}

//flip card
const flipCard = (event) => {
  console.log("Flipping card...")
  const cardContainer = event.target.parentElement

  // Display block for .firstFace & Display none for .cover
  cardContainer.querySelector(".firstface").classList.toggle("show")
  cardContainer.querySelector(".cover").classList.toggle("hide")

  // Is this the first or second card
  if (firstCard) {
    // Second card has been selected
    secondCard = cardContainer.querySelector(".firstface")
    secondCover = cardContainer.querySelector(".cover")

    compareCards()
  } else {
    // First card has been selected
    firstCard = cardContainer.querySelector(".firstface")
    firstCover = cardContainer.querySelector(".cover")
  }
}

const compareCards = () => {
  

  const firstCardColor = firstCard.getAttribute("data-value")
  const secondCardColor = secondCard.getAttribute("data-value")

  // Compare her to see the firstcard and secound card match or not 
  
  if (firstCardColor === secondCardColor) {
    console.log("It's a match")
    firstCard.parentElement.removeEventListener("click", flipCard)
    secondCard.parentElement.removeEventListener("click", flipCard)
    firstCard = null
    secondCard = null
  } else {
    console.log("Not a match")

    setTimeout(() => {
      // Flip cards back to cover
      firstCard.classList.toggle("show")
      // Step 1 hide second card
      secondCard.classList.toggle("show")
      // Step 2 show first card cover
      firstCover.classList.toggle("hide")
      // Step 3 show second card cover
      secondCover.classList.toggle("hide")
      firstCard = null
      secondCard = null
    }, 500)
  }
}

//restart game 
function restartGame() {
  let firstCard = null
  let secondCard = null

  let firstCover = null
  let secondCover = null
  let cardContainer = null
  cards.forEach((card) => {
    card.querySelector(".firstface").classList.remove("show")
    card.querySelector(".cover").classList.remove("hide")

    cards.forEach((card) => {
      card.removeEventListener("click", flipCard)
    })
  })
  random()
  startGame()

}

//make random card to choose
function random() {
  cards.forEach((card) => {
    const randomIndex = Math.floor(Math.random() * cards.length)

    card.style.order = randomIndex
  })
}



//  call to start game
startGame()

//add restart button 
const againGame = document.getElementById("restart")
restart.addEventListener("click", restartGame)
