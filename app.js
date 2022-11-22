const cardArray = [
    {
        name: 'carrot',
        img: 'images/carrot.png'
    },
    {
        name: 'chick',
        img: 'images/chick.png'
    },
    {
        name: 'cloud',
        img: 'images/cloud (3).png'
    },
    {
        name: 'doughnut',
        img: 'images/doughnut.png'
    },
    {
        name: 'peach',
        img: 'images/peach.png'
    },
    {
        name: 'sandwich',
        img: 'images/sandwich.png'
    },
    {
        name: 'carrot',
        img: 'images/carrot.png'
    },
    {
        name: 'chick',
        img: 'images/chick.png'
    },
    {
        name: 'cloud',
        img: 'images/cloud (3).png'
    },
    {
        name: 'doughnut',
        img: 'images/doughnut.png'
    },
    {
        name: 'peach',
        img: 'images/peach.png'
    },
    {
        name: 'sandwich',
        img: 'images/sandwich.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())
let cardsChosen = []

const gridDisplay = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosenIds= []
const cardsWon = []



function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const card =  document.createElement('img')
       card.setAttribute('src', 'images/black.png')
       card.setAttribute('data-id', i)
       gridDisplay.appendChild(card)
       card.addEventListener('click', flipCard)
       console.log(gridDisplay)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log('check for match')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('You have clicked the same image!')
    }
    

    if (cardsChosen[0] == cardsChosen[1]) {
    alert('Its a Match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
   
    cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('Not this time, try again!')
    }


result.textContent = cardsWon.length
cardsChosen = []
cardsChosenIds= []

if  (cardsWon.length == (cardArray.length/2)) {
    result.innerHTML = 'Congratulations, you found them all!'
}

}

function flipCard() {
    console.log(cardArray)
    const cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}


