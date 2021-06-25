
const cardArray = [1,2,3,4,5,6,7,8,9,10,11]
const hitButton = document.querySelector('#hit-button')
const myCards = document.querySelector('#my-cards')
const myCardArray = []

function hitMe() {
    myCardArray.push(cardArray[Math.floor(Math.random() * cardArray.length)])
    myCards.innerHTML = myCardArray
}

hitButton.addEventListener('click', hitMe)

