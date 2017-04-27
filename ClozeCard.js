var BasicCard = require("./BasicCards.js");

var BasicCardsArary = [];
var ClozeCardsArray = [];

var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	this.addClozeCard = function(t, c) {
		this.ClozeCardsArray.push(new ClozeCard);
	}
	var f = text;
	var b = cloze;
	this.addBasicCard = function(f, b) {
		this.BasicCardsArary.push(new BasicCard(f, b));
	}
};


module.exports = ClozeCard;