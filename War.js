const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ["A", "2", '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const cardValueMap = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10': 10,
    'J' : 11,
    'Q' : 12,
    'K' : 13,
    'A' : 14,

}

class Card {

    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
  
  class Player {
  
    constructor(name) {
      this.name = name;
      this.playerDeck = [];
      this.playerScore = 0;
    }
  
    createDeck(deck) {
      this.playerDeck = deck;
    }
  }
  



class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

   get numberOfCards() {
        return this.cards.length;
    }


    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
           const newIndex = Math.floor(Math.random() * (i + 1));
           const oldValue = this.cards[newIndex];
           this.cards[newIndex] = this.cards[i];
           this.cards[i] = oldValue;
        }
    }
}




function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        });
    });
}

function setUpGame(player1, player2) {
    const deck = new Deck();
    deck.shuffle();
   

    const middleOfDeck = (deck.numberOfCards / 2);

    player1.createDeck(deck.cards.slice(0, middleOfDeck));
    player2.createDeck(deck.cards.slice(middleOfDeck, deck.numberOfCards));
}

function roundOutput(player1, player2, roundNum){
    console.log( `${player1.name} plays: ${player1.playerDeck[roundNum].value} of ${player1.playerDeck[roundNum].suit}`);
    console.log( `${player2.name} plays: ${player2.playerDeck[roundNum].value} of ${player2.playerDeck[roundNum].suit}`);
}

function playRoundResults(player1, player2){
    for (let i = 0; i < player1.playerDeck.length; i++) {
        roundOutput(player1, player2, i);
        if (cardValueMap[player1.playerDeck[i].value] > cardValueMap[player2.playerDeck[i].value]) {
            player1.playerScore += 1;
            console.log(`${player2.name} has won this round`);

        } else {
            console.log(`${player1.name} and ${player2.name} have tied!`)
        }
    }
}


function finalScore(player1, player2) {
    if (player1.playerScore > player2.playerScore) {
      console.log(`${player1.name} has won this round with a final score of: ${player1.playerScore}`);
    } else if (player1.playerScore < player2.playerScore) {
      console.log(`${player2.name} has won this round with a final score of: ${player2.playerScore}`);
    } else {
      console.log(`${player1.name} and ${player2.name} have tied!`);
    }
  } 
  
  let Jason = new Player("Jason");
  let Don = new Player("Don");
  
 
  setUpGame(Jason, Don);
  
  playRoundResults(Jason, Don);
  
  finalScore(Jason, Don);

