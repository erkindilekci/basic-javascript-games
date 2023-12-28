const cardArray = [
    {name: 'fries', img: 'images/fries.png'},
    {name: 'fries', img: 'images/fries.png'},
    {name: 'cheeseburger', img: 'images/cheeseburger.png'},
    {name: 'cheeseburger', img: 'images/cheeseburger.png'},
    {name: 'hotdog', img: 'images/hotdog.png'},
    {name: 'hotdog', img: 'images/hotdog.png'},
    {name: 'ice-cream', img: 'images/ice-cream.png'},
    {name: 'ice-cream', img: 'images/ice-cream.png'},
    {name: 'milkshake', img: 'images/milkshake.png'},
    {name: 'milkshake', img: 'images/milkshake.png'},
    {name: 'pizza', img: 'images/pizza.png'},
    {name: 'pizza', img: 'images/pizza.png'}
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const resultDisplay = document.getElementById('result');

const cardsChosen = [];
const cardsChosenIds = [];
const cardsWon = [];

const checkMatch = () => {
    const cards = document.querySelectorAll('#grid img');

    if (cardsChosen[0] === cardsChosen[1]) {
        if (cards[cardsChosenIds[0]] === cards[cardsChosenIds[1]]) cardsChosenIds.forEach(id => cardsChosenIds[id].src = 'images/blank.png');

        cardsChosenIds.forEach(id => {
            cards[id].src = 'images/white.png';
            cards[id].removeEventListener('click', flipCard);
        });
        cardsWon.push(cardsChosen);
    } else {
        cardsChosenIds.forEach(id => cards[id].src = 'images/blank.png');
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen.splice(0);
    cardsChosenIds.splice(0);

    if (cardsWon.length === cardArray.length / 2) resultDisplay.textContent = 'Congrats, you found all of them';
};

function flipCard() {
    const cardId = this.getAttribute('data-id');
    const chosenCard = cardArray[cardId];
    cardsChosen.push(chosenCard.name);
    cardsChosenIds.push(cardId);
    this.src = chosenCard.img;
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 400);
    }
};

const createBoard = () => {
    cardArray.forEach((c, i) => {
        const card = document.createElement('img');
        card.src = 'images/blank.png';
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    });
};

createBoard();

