
var BasicCard = require("./BasicCards.js");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");

var basicDeck = [];
var clozeDeck = [];
var win = 0;
var loss = 0;
var basicCards = [{ front: "What shape has six sides?", back: "hexagon" }, { front: "What shape has four equal sides?", back: "square" }, { front: "What shape has seven sides?", back: "heptagon" }, { front: "What shape three sides?", back: "triangle" }];
var clozeCards = [{ text: "A hexagon has six sides.", cloze: "six" }, { text: "A square has four equal sides.", cloze: "four" }, { text: "A heptagon has seven sides.", cloze: "seven" }, { text: "A triangle has three sides.", cloze: "three" }];
var count = 0;

function playBasicCards() {
    //play with basic cards
    if (count < basicDeck.length) {
        inquirer.prompt([{
            type: "input",
            name: "question",
            message: basicDeck[count].front
        }]).then(function(answer) {
            if (answer.question === basicDeck[count].back) {
                console.log("You are right!");
                win++;
            } else {
                console.log("Sorry, the right answer was " + basicDeck[count].back);
                loss++;
            }
            count++;
            playBasicCards();
        });
    } else {
        console.log("You got " + win + " of the answers right and " + loss + " wrong.");
        //reset stats
        count = 0;
        win = 0;
        loss = 0;
        // basicDeck = [];
    }
}

function playClozeCards() {
    //play with cloze cards
    if (count < clozeDeck.length) {
        inquirer.prompt([{
            type: "input",
            name: "question",
            message: clozeDeck[count].question
        }]).then(function(answer) {
            if (answer.question === clozeDeck[count].cloze) {
                console.log("You are right!");
                win++;
            } else {
                console.log("Sorry, the right answer was " + clozeDeck[count].cloze);
                loss++;
            }
            count++;
            playClozeCards();
        });
    } else {
        console.log("You got " + win + " of the answers right and " + loss + " wrong.");
        //reset stats
        count = 0;
        win = 0;
        loss = 0;
        // clozeDeck = [];
    }
}

function playGame() {
    //ask user if he wants to use flashcards or cloze cards
    inquirer.prompt([{
        type: "list",
        name: "game",
        message: "What would you like to do?",
        choices: ["Flashcard Game", "Cloze Card Game", "Create Flashcards and Play", "Create Cloze Cards and Play"]
    }]).then(function(answer) {
        console.log(answer.game);
        //user wants to play with flashcards
        if (answer.game === "Flashcard Game") {
            //create cards in basicDeck Array
            for (var i = 0; i < basicCards.length; i++) {
                var newBasicCard = new BasicCard(basicCards[i].front, basicCards[i].back);
                basicDeck.push(newBasicCard);
            }
            console.log(basicDeck);
            playBasicCards();
        } else if (answer.game === "Cloze Card Game") {
            //user wants to play with cloze cards
            for (var i = 0; i < clozeCards.length; i++) {
                var newClozeCard = new ClozeCard(clozeCards[i].text, clozeCards[i].cloze);
                clozeDeck.push(newClozeCard);
            }
            playClozeCards();

        } else if (answer.game === "Create Flashcards and Play") {
            makeBasicCards();
        } else {

        }
    })
};


function makeBasicCards() {
    console.log("New Basic Card");
    //get user input for basic cards
    if (count < 2) {
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
            // push cards into basicDeck Array
            basicDeck.push(newBasicCard);
            // fs.appendFile("basicDeck.json", JSON.stringify(answer) + ",", function(err) {
            //     if (err) {
            //         console.log(err);
            //     }
            // });
            count++;
            makeBasicCards();
        })

    } else {
        count = 0;
        playBasicCards();
    }
};


function makeClozeCard() {

    if (count < 5) {
        console.log("New cloze card:");

        inquirer.prompt([{
            type: "input",
            name: "text",
            message: "Enter your text for the cloze card's front.",
        }, {
            type: "input",
            name: "cloze",
            message: "Enter the key word you would like to take out of the sentence."
        }]).then(function(answer) {
            // console.log(answer);
            var newClozeCard = new ClozeCard(answer.text, answer.cloze);
            fs.appendFile("clozeDeck.json", JSON.stringify(answer) + ",", function(err) {
                if (!err) {
                    console.log("working");
                }
            });
            clozeDeck.push(newClozeCard);
            count++;
            makeClozeCard();
        })
    } else {
        for (var i = 0; i < clozeDeck.length; i++) {

        };
    }
};

//start game
playGame();

