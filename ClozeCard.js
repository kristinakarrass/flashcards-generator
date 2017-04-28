var ClozeCard = function(text, cloze) {
	this.clozeDeck = [];
	this.text = text;
	this.cloze = cloze;
	this.question = text.replace(cloze, " ... ");

	this.addClozeCard = function(t, c) {
		this.clozeDeck.push(new ClozeCard);
	}
};


module.exports = ClozeCard;