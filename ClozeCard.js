//contructor for cloze cards that has full text, cloze and partial text as values
var ClozeCard = function(text, cloze) {
	this.clozeDeck = [];
	this.text = text;
	this.cloze = cloze;
	this.question = text.replace(cloze, " ... ");
};


module.exports = ClozeCard;