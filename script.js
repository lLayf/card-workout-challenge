// Card and suit arrays
const CARDS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♠️", "♣️", "♥️", "♦️"];
let shuffledDeck = [];

// Exercise texts for each suit
const suitTexts = {
    "spades": "Exercise for ♠️",
    "clubs": "Exercise for ♣️",
    "hearts": "Exercise for ♥️",
    "diamonds": "Exercise for ♦️"
};

const deck = document.querySelector('.card-deck__card.card');
const modal = document.getElementById("modal");
const suitTextElement = document.getElementById("suit-text");
const form = document.getElementById("suitTextForm");

// Get suit key
function getSuitKey(suit) {
    return suit === "♠️" ? "spades" : suit === "♣️" ? "clubs" : suit === "♥️" ? "hearts" : "diamonds";
}

// Shuffle the deck
function shuffleDeck() {
    shuffledDeck = [];
    for (const suit of SUITS) {
        for (const value of CARDS) {
            shuffledDeck.push(`${value} ${suit}`);
        }
    }
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    deck.innerHTML = `<div class="card__back"></div>`;
}

// Display a card
function showCard(card) {
    const suit = card.split(' ')[1];
    const suitKey = getSuitKey(suit);
    const text = suitTexts[suitKey];
    const colorClass = suit === "♥️" || suit === "♦️" ? "red-suit" : "black-suit";
    deck.innerHTML = `<div class="card ${colorClass}">${card}</div>`;
    suitTextElement.innerText = text;
}

// Event listeners
deck.addEventListener("click", () => {
    if (shuffledDeck.length > 0) {
        const nextCard = shuffledDeck.pop();
        showCard(nextCard);
    }
});

modal.style.display = "block";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    suitTexts["spades"] = document.getElementById("textForSpades").value;
    suitTexts["clubs"] = document.getElementById("textForClubs").value;
    suitTexts["hearts"] = document.getElementById("textForHearts").value;
    suitTexts["diamonds"] = document.getElementById("textForDiamonds").value;
    shuffleDeck();
    modal.style.display = "none";
});