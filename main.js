//stringify answer!!!

var BasicCard = require("./BasicCards.js");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");

var basicDeck = [];
var clozeDeck = [];


function playGame() {
    inquirer.prompt([
    {
        type: "list",
        name: "game",
        message: "Would you like to see flashcards or play a game with cloze cards?",
        choices: ["Flashcard Game", "Cloze Card Game"]
    }
        ]).then(function(answer) {
            if (answer.game === "Flashcard Game") {
                
            } else {
                
             }
        })
    };
    playGame();

function makeBasicCard() {

    inquirer.prompt([{
        type: "input",
        name: "front",
        message: "Please enter the question for the front side of your flashcard."
    }, {
        type: "input",
        name: "back",
        message: "Please enter the answer for the back side of your flashcard."
    }]).then(function(answer) {
        var newBasicCard = new BasicCard(answer.front, answer.back);
        // console.log(newBasicCard);
        basicDeck.push(newBasicCard);
        console.log(basicDeck);
        fs.appendFile("basicDeck.txt", JSON.stringify(answer), function(err) {
            if (!err) {
                console.log("working");
            }
        });
    })

};

function makeClozeCard() {

    inquirer.prompt([{
        type: "input",
        name: "text",
        message: "Enter your text for the cloze card's front.",
    }, {
        type: "input",
        name: "cloze",
        message: "Enter the key word you would like to take out of the sentence."
    }]).then(function(answer) {
    	console.log(answer);
        var newClozeCard = new ClozeCard(answer.text, answer.cloze);
        fs.appendFile("clozeDeck.txt", JSON.stringify(answer), function(err) {
            if (!err) {
                console.log("working");
            }
        });
    })
};

// makeBasicCard();
// makeClozeCard();
