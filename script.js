
const hitButton = document.querySelector('#hit-button')
const dealButton = document.querySelector('#deal-button')
const myCards = document.querySelector('#my-cards')
const dealerCards = document.querySelector('#dealer-cards')
const playerSum = document.querySelector('#player-sum')
const dealerSum = document.querySelector('#dealer-sum')

const cardArray = [1,2,3,4,5,6,7,8,9,10,11]
const dealerCardArray = []
const myCardArray = []
let playerSumTotal = 0
let dealerSumTotal = 0

function hitMe() {
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray

    playerSumTotal = 0

    for (let i = 0; i < myCardArray.length; i++) {
        playerSumTotal += myCardArray[i]
    }

    playerSum.innerHTML = playerSumTotal
}

function deal(){
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray

    dealerCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    dealerCards.innerHTML = dealerCardArray

    dealButton.removeEventListener('click', deal)
    hitButton.addEventListener('click', hitMe)

    for (let i = 0; i < myCardArray.length; i++) {
        playerSumTotal += myCardArray[i]
    }

    playerSum.append(playerSumTotal)
   
    for (let i = 0; i < dealerCardArray.length; i++) {
        dealerSumTotal += dealerCardArray[i]
    }

    dealerSum.append(dealerSumTotal)
}





dealButton.addEventListener('click', deal)

