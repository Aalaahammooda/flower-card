// Download 4 images
// Rename them to something simple
// Put them in the images directory

// Create the HTML with the grid (4 cards covered)

// Work on javascript
// Create a grid/gameboard using an array
// Call on a function that will put random images in the array

let cards = document.querySelectorAll(".box")

let cardBoard = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

// let r = Math.floor(Math.random() * 12)

let firstCard = null
let secondCard = null

const startGame = () => {
  flipEventListeners()
}

const flipEventListeners = () => {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard)
  })
}

const flipCard = (event) => {
  const cardContainer = event.target.parentElement
  console.log(`cardContainer clicked ${cardContainer.classList}`)

  // Is this the first or second card
  if (firstCard) {
    // Second card has been selected
    secondCard = cardContainer.querySelector(".firstface")
    compareCards()
  } else {
    // First card has been selected
    firstCard = cardContainer.querySelector(".firstface")
  }
}

const compareCards = () => {
  const firstCardColor = firstCard.getAttribute("data-value")
  const secondCardColor = secondCard.getAttribute("data-value")

  // Compare here
}

startGame()
