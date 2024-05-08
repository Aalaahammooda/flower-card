// Download 4 images
// Rename them to something simple
// Put them in the images directory

// Create the HTML with the grid (4 cards covered)

// Work on javascript
// Create a grid/gameboard using an array
// Call on a function that will put random images in the array

const cards = document.querySelectorAll(".box")
const restart = document.querySelector("#restart")

let firstCard = null
let secondCard = null

let firstCover = null
let secondCover = null

let cardContainer = null

const startGame = () => {
  flipEventListeners()
  //shuffleCards()
  // letRandom()
}
function random() {
  cards.forEach((card) => {
    const randomIndex = Math.floor(Math.random() * cards.length)

    card.style.order = randomIndex
  })
}
//to choose card random

//const shuffleCards=() =>{
// console.log(`originalCards `, originalCards)
// // While originalCards has cards inside of it
// while(originalCards.length > 0){
//   // Generate random number between 0 and the length of originalCards
//   const randomIndex = Math.floor(Math.random() * (0, originalCards.length))
//   console.log(`randomIndex => ${randomIndex}`)
//   // Get the card at random location generated above and put in cards
//   const randomCard = originalCards[randomIndex]
//   // TODO add card to cards
//   cards.push(randomCard)
//   // Remove random card that was selected from original cards
//   originalCards.splice(randomIndex, 1)
// }
// console.log(`cards `, cards)
//}

// function letRandom(min ,max){
//   let r = Math.floor(Math.random() * (max - min+1));
//   return r
// }
// r=letRandom(0,8)
// console.log(letRandom)

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
      firstCard = null
      secondCard = null
    }, 500)
  }
}
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
// function to start game
startGame()
//add
const againGame = document.getElementById("restart")
restart.addEventListener("click", restartGame)
