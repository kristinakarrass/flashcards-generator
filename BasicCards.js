var BasicCard = function(front, back) {
	this.basicArray = [];
    this.front = front;
    this.back = back;

    this.addBasicCard = function(t, c) {
        this.basicArray.push(new ClozeCard);
    }
};

module.exports = BasicCard;
