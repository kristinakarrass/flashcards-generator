var BasicCard = function(front, back) {
	this.basicDeck = [];
    this.front = front;
    this.back = back;

    this.addBasicCard = function(f, b) {
        this.basicDeck.push(new BasicCard);
    }
};

module.exports = BasicCard;
