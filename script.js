const hitButton = document.querySelector('#hit-button')
const dealButton = document.querySelector('#deal-button')
const standButton = document.querySelector('#stand-button')

const myCards = document.querySelector('#my-cards')
const dealerCards = document.querySelector('#dealer-cards')

const playerContainer = document.querySelector('.player-container')
const dealerContainer = document.querySelector('.dealer-container')

const playerWinElement = document.querySelector('#player-win-sum')
const dealerWinElement = document.querySelector('#dealer-win-sum')

const playerStatus = document.querySelector('#player-status')
const dealerStatus = document.querySelector('#dealer-status')

const playerSum = document.querySelector('#player-sum')
const dealerSum = document.querySelector('#dealer-sum')

const cardArray = [
    1,1,1,1,
    2,2,2,2,
    3,3,3,3,
    4,4,4,4,
    5,5,5,5,
    6,6,6,6,
    7,7,7,7,
    8,8,8,8,
    9,9,9,9,
    10,10,10,10,
    10,10,10,10,
    10,10,10,10,
    10,10,10,10,
    11,11,11,11

]
let dealerCardArray = []
let myCardArray = []
let playerSumTotal = 0
let dealerSumTotal = 0


dealButton.addEventListener('click', deal)
standButton.addEventListener('click', stand)

function hitMe() {
    let randomCard = Math.floor(Math.random() * cardArray.length)
    myCardArray.push(cardArray[randomCard])
    myCards.innerHTML = myCardArray.join(' ')

    playerSumTotal = 0

    for (let i = 0; i < myCardArray.length; i++) {
        playerSumTotal += myCardArray[i]
    }

    playerSum.innerHTML = playerSumTotal
    checkPlayerSum(playerSumTotal)
}

function deal(){
    reset()
    
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray.join(' ')

    dealerCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    dealerCards.innerHTML = dealerCardArray.join(' ')

    dealButton.removeEventListener('click', deal)
    standButton.addEventListener('click', stand)
    hitButton.addEventListener('click', hitMe)

    for (let i = 0; i < myCardArray.length; i++) {
        playerSumTotal += myCardArray[i]
    }

    playerSum.append(playerSumTotal)
   
    for (let i = 0; i < dealerCardArray.length; i++) {
        dealerSumTotal += dealerCardArray[i]
    }

    dealerSum.append(dealerSumTotal)

    checkPlayerSum(playerSumTotal)
}

function checkPlayerSum(playerSumTotal){
    if (playerSumTotal > 21) {
        console.log('you lose')
        playerStatus.innerHTML = 'you bust'
        dealerStatus.innerHTML = 'dealer wins'
        dealerContainer.classList.remove('dealer-container')
        dealerContainer.classList.add('dealer-winner')
        hitButton.removeEventListener('click', hitMe)
        standButton.removeEventListener('click', stand)
        dealButton.addEventListener('click', deal)
    }
}

function checkDealerSum(dealerSumTotal, clock, playerSumTotal){
    dealerStatus.innerHTML = ''
    playerStatus.innerHTML = ''

    let dealerWinTotal = 0
    let dealerWinArray = []

    if (dealerSumTotal > 16 && dealerSumTotal < 22) {
        console.log('dealer as to stand')
        dealerStatus.innerHTML = 'dealer must stand'
        if (dealerSumTotal > playerSumTotal) {
            console.log('dealer wins')
            dealerStatus.innerHTML = 'dealer wins'
            dealerContainer.classList.remove('dealer-container')
            dealerContainer.classList.add('dealer-winner')
           
            clearInterval(clock)
            dealButton.addEventListener('click', deal)  
            
            // dealerWinArray.push(1)

            // for (let i = 0; i < dealerWinArray.length; i++) {
            //     dealerWinTotal += dealerWinArray[i]
            // }
        
            // dealerWinElement.innerHTML = dealerWinTotal

        } else {
            console.log('you win!')
            playerStatus.innerHTML = 'you win!'
            playerContainer.classList.remove('player-container')
            playerContainer.classList.add('player-winner')
            clearInterval(clock)
            dealButton.addEventListener('click', deal)   
        }
    } else if (dealerSumTotal > 21) {
        console.log('dealer busts, you win!')
        dealerStatus.innerHTML = 'dealer busts'
        playerStatus.innerHTML = 'you win!'
        playerContainer.classList.remove('player-container')
        playerContainer.classList.add('player-winner')
        clearInterval(clock)
        dealButton.addEventListener('click', deal)   
    } else {
        console.log('dealer must hit')
        dealerStatus.innerHTML = 'dealer must hit'
    }
}

function stand(){
    playerStatus.innerHTML = 'you chose to stand'
    hitButton.removeEventListener('click', hitMe)
    addDealerCards()
}

function addDealerCards(){
    var clock = setInterval (frame, 3000)
    function frame(){ 
        dealerCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
        dealerCards.innerHTML = dealerCardArray.join(' ')
        dealerSumTotal = 0
        for (let i = 0; i < dealerCardArray.length; i++) {
            dealerSumTotal += dealerCardArray[i]
        }
        dealerSum.innerHTML = dealerSumTotal
        checkDealerSum(dealerSumTotal, clock, playerSumTotal)
    }
}

function reset(){
    dealerCardArray = []
    myCardArray = []
    playerSumTotal = 0
    dealerSumTotal = 0

    playerSum.innerHTML = ""
    dealerSum.innerHTML = ""
    dealerStatus.innerHTML = ''
    playerStatus.innerHTML = ''

    dealerContainer.classList.remove('dealer-winner')
    dealerContainer.classList.add('dealer-container')
    playerContainer.classList.remove('player-winner')
    playerContainer.classList.add('player-container')
}





