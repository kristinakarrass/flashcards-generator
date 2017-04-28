var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
// var fs = require("fs");

var basicArray = [];
var clozeArray = [];

function makeBasicCard() {

	inquirer.prompt([
	{
		name: "front",
		message: "Please enter the question for the front side of your flashcard."
	},
	{
		name: "back",
		message: "Please enter the answer for the back side of your flashcard."
	}]).then(function(answer) {
		var newBasicCard = new BasicCard(answer.front, answer.back);
		

	})

}