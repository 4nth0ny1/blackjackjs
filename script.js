
const cardArray = [1,2,3,4,5,6,7,8,9,10,11]
const hitButton = document.querySelector('#hit-button')
const dealButton = document.querySelector('#deal-button')
const myCards = document.querySelector('#my-cards')
const dealerCards = document.querySelector('#dealer-cards')

const dealerCardArray = []
const myCardArray = []

function hitMe() {
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray
}

function deal(){
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray

    dealerCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    dealerCards.innerHTML = dealerCardArray

    dealButton.removeEventListener('click', deal)
    hitButton.addEventListener('click', hitMe)
}

dealButton.addEventListener('click', deal)
