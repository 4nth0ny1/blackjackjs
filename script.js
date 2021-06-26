const hitButton = document.querySelector('#hit-button')
const dealButton = document.querySelector('#deal-button')
const standButton = document.querySelector('#stand-button')

const myCards = document.querySelector('#my-cards')
const dealerCards = document.querySelector('#dealer-cards')

const playerSum = document.querySelector('#player-sum')
const dealerSum = document.querySelector('#dealer-sum')

const cardArray = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11]
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
    checkPlayerSum(playerSumTotal)
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

function checkPlayerSum(playerSumTotal){
    if (playerSumTotal > 21) {
        console.log('you lose')
        hitButton.removeEventListener('click', hitMe)
        standButton.removeEventListener('click', stand)
        dealButton.addEventListener('click', deal)
    }
}

function checkDealerSum(dealerSumTotal, clock, playerSumTotal){
    if (dealerSumTotal > 16 && dealerSumTotal < 22) {
        console.log('dealer has to stand')
        if (dealerSumTotal > playerSumTotal) {
            console.log('dealer wins')
            clearInterval(clock)
            dealButton.addEventListener('click', deal)   
        } else {
            console.log('you win!')
            clearInterval(clock)
            dealButton.addEventListener('click', deal)   
        }
    } else if (dealerSumTotal > 21) {
        console.log('dealer busts, you win!')
        clearInterval(clock)
        dealButton.addEventListener('click', deal)   
    } else {
        console.log('deal must hit')
    }
}

// if dealer has more than 16, the dealer stands 
// if the dealer has more than 16, less than 22, and more than the player the dealer wins 
// if the dealer has more than 21 then the dealer loses no matter what the dealer 
// clearInterval(clock)
// dealButton.addEventListener('click', deal)

function stand(){
    console.log('standing')
    hitButton.removeEventListener('click', hitMe)
    addDealerCards()
}

function addDealerCards(){
   
    var clock = setInterval (frame, 3000)

    function frame(){ 
        dealerCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
        dealerCards.innerHTML = dealerCardArray

        dealerSumTotal = 0

        for (let i = 0; i < dealerCardArray.length; i++) {
            dealerSumTotal += dealerCardArray[i]
        }
    
        dealerSum.innerHTML = dealerSumTotal
        checkDealerSum(dealerSumTotal, clock, playerSumTotal)
    }
}





