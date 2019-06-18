console.log("Up and running");


const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/quees-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen=of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
const cardsInPlay = [];
function checkForMatch(){
	this.setAttribute('src', cards.cardImage);
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
}
function flipCard(){
	this.getAttribute('data-id');
	console.log("User flipped " + cards.rank);
	console.log(cards.cardImage);
	console.log(cards.suit);
	cardsInPlay.push(cards.rank);
	checkForMatch();

}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
