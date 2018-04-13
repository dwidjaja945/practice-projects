
$(document).ready(initializeApp);

class Card = {
    constructor(suit, value, id) {
        this.suit = suit;
        this.value = value;
        this.id = id;
    },
    flip() {
        $(".cardBack").css("display", "none");
    }
};


function initializeApp() {
    createCards(xxx, xxx, xxx);
}
function createCards(suit, value, id) {
    for(var i = 0; i < 52; i ++) {
        var card = new Card(suit, value, i);
        array.push(card);
        shuffleCards(array);
        distributeCards(array);
    }
}

function flipCards (card) {
    card.flip();
}


function shuffleCards(array) {
    var randomNum = 0;
    var temp = null;
    for (var index = array.length -1 ; index > 0; index--) {
        randomNum = Math.floor(Math.random() * (index));
        /* Swapping varables */
        temp = array[index];
        array[index] = array[randomNum];
        array[randomNum] = temp;
    }
    return array;
}