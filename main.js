var BasicCard = require("./BasicCards.js");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");

var basicDeck = [];
var clozeDeck = [];

function makeBasicCard() {

	inquirer.prompt([
	{
		name: "front",
		message: "Please enter the question for the front side of your flashcard."
	},
	{
		name: "back",
		message: "Please enter the answer for the back side of your flashcard."
	}
	]).then(function(answer) {
		var newBasicCard = new BasicCard(answer.front, answer.back);
		// console.log(newBasicCard);
        basicDeck.push(newBasicCard);
        console.log(basicDeck);
        fs.appendFile("basicDeck.txt", newBasicCard,  function(err) {
                        if (!err) {
                            console.log("working");
                        }
                    });
	})

};

function makeClozeCard() {

	inquirer.prompt([
	{
		name: "text",
		message: "Enter your text for the cloze card's front.",
	},
	{
		name: "cloze",
		message: "Enter the key word you would like to take out of the sentence."
	}]).then(function(answer) {
		var newClozeCard = new ClozeCard(answer.text, answer.cloze);
		clozeDeck.push(newClozeCard);
	})
}

makeBasicCard();