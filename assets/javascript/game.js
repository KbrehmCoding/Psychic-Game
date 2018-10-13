var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// the code for randomly choosing a letter
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesSoFarText = document.getElementById("guessessofar-text");

function startNewGame() {
    guessesLeft = 9;
    guessesSoFar = 0;
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// player hits a key
document.onkeyup = function (event) {
    var userGuess = event.key;

    // checks if the letter guessed is not the letter the computer chose
    if (userGuess !== computerChoice) {
        guessesLeft--;
        guessesSoFar++;
        if (guessesLeft === 0) {
            losses++;
            startNewGame();
        }
    } else {
        wins++;
        guessesSoFar = 0;
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    // display the updated scores
    winsText.innerText = wins;
    lossesText.innerText = losses;
    guessesLeftText.innerText = guessesLeft;
    guessesSoFarText.innerText = guessesSoFar;
};
