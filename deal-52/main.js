
var cardArray = [];
function createCard(){

  var suitArray = ['spades', 'diamonds', 'clovers', 'hearts'];
  var numArray = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'];
  for(var s=0; s < suitArray.length; s++){
    for(var n = 0; n < numArray.length; n++){
      var card = new Card(suitArray[s],numArray[n]);
     cardArray.push(card);
    }
  }
  for(var index = 0; index < cardArray.length; index++){
    cardArray[index].id = index;
  }
  return cardArray;
}

class Card {
    constructor(suit, value, id) {
        this.suit = suit;
        this.value = value;
        this.id = id;
    }
};
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