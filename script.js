const hitButton = document.querySelector('#hit-button')
const dealButton = document.querySelector('#deal-button')
const standButton = document.querySelector('#stand-button')

const myCards = document.querySelector('#my-cards')
const dealerCards = document.querySelector('#dealer-cards')

const playerSum = document.querySelector('#player-sum')
const dealerSum = document.querySelector('#dealer-sum')

const cardArray = [1,2,3,4,5,6,7,8,9,10,11]
let dealerCardArray = []
let myCardArray = []
let playerSumTotal = 0
let dealerSumTotal = 0

dealButton.addEventListener('click', deal)
standButton.addEventListener('click', stand)

function hitMe() {
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray

    playerSumTotal = 0

    for (let i = 0; i < myCardArray.length; i++) {
        playerSumTotal += myCardArray[i]
    }

    playerSum.innerHTML = playerSumTotal
    checkSum(playerSumTotal)
}

function deal(){
    dealerCardArray = []
    myCardArray = []
    playerSumTotal = 0
    dealerSumTotal = 0

    playerSum.innerHTML = ""
    dealerSum.innerHTML = ""

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

function checkSum(playerSumTotal, myCardArray){
    if (playerSumTotal > 21) {
        console.log('you lose')
        hitButton.removeEventListener('click', hitMe)
        standButton.removeEventListener('click', stand)
        dealButton.addEventListener('click', deal)
    }
}

function stand(){
    console.log('standing')
    hitButton.removeEventListener('click', hitMe)
}


