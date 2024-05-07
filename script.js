// Download 4 images
// Rename them to something simple
// Put them in the images directory

// Create the HTML with the grid (4 cards covered)

// Work on javascript
// Create a grid/gameboard using an array
// Call on a function that will put random images in the array

let cards = document.querySelectorAll(".box")

// let cardBoard = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

// let cardsBoard = [
//   {
//     itCard: "yellow",
//     imgUrl: "images/yellow f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCard: "yellow",
//     imgUrl: "images/yellow f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "pink",
//     imgUrl: "images/pink f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "pink",
//     imgUrl: "images/pink f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "red",
//     imgUrl: "images/red f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "red",
//     imgUrl: "images/red f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "purple",
//     imgUrl: "images/purple f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
//   {
//     itCardCard: "purple",
//     imgUrl: "images/purple f.jpeg",
//     itOpen: false,
//     matchCard: false,
//   },
// ]

let firstCard = null
let secondCard = null

let firstCover = null
let secondCover = null

let cardContainer = null

const startGame = () => {
  flipEventListeners()

  // shuffleCards()
}
//to choose card random
// const shuffleCards = () => {
//   cardBoard.sort(() => Math.random - 0.5)
// }

const flipEventListeners = () => {
  cards.forEach((card) => {
    card.addEventListener("click", flipCard)
  })
}

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
  
  //const firstCover=firstCover.querySelector(".cover")
  //const secoundCover=secoundCover.querySelector(".cover")


  const firstCardColor = firstCard.getAttribute("data-value")
  const secondCardColor = secondCard.getAttribute("data-value")

  // Compare here
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
    firstCard=null
    secondCard=null
    },1000)
  }
}

startGame()
