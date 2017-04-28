var ClozeCard = function(text, cloze) {
	this.clozeArray = [];
	this.text = text;
	this.cloze = cloze;
	this.question = text.replace(cloze, " ... ");

	this.addClozeCard = function(t, c) {
		this.clozeArray.push(new ClozeCard);
	}
};


module.exports = ClozeCard;