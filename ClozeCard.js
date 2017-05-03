//contructor for cloze cards that has full text, cloze and partial text as values (scope safe)
function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard) {
	this.clozeDeck = [];
	this.text = text;
	this.cloze = cloze;
	this.question = text.replace(cloze, " ... ");
} else {
	return new ClozeCard(text, cloze);
}
};


module.exports = ClozeCard;