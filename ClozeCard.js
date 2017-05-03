//contructor for cloze cards that has full text, cloze and partial text as values (scope safe)
function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.clozeDeck = [];
        this.text = text;
        this.cloze = cloze;
        this.question = function() {
            if (text.indexOf(cloze) === -1) {
                console.log("Error! Cloze is not part of your input!");
            } else {
                text.replace(cloze, " ... ");
            }
        }
    } else {
        return new ClozeCard(text, cloze);
    }
};


module.exports = ClozeCard;
