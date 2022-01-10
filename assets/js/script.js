
/*
button.addEventListener("click", function() {
    playGame();
}
*/

function playGame() {

    let playerCard = document.getElementById('player-screen'); 

    playerCard.setAttribute('value', playerCard)

    const cards = ["rock", "paper", "scissors", "lizzard", "spock"];

    const random = Math.floor(Math.random() * cards.length);
    console.log(random, cards[random]);
 
}


const cards = ["rock", "paper", "scissors", "lizzard", "spock"];

let playerCard = "rock"
let computerCard = "spock"

// Rock Scenario for player
if (playerCard === "rock" && computerCard === "scissors") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`); 
} else if (playerCard === "rock" && computerCard === "lizzard") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);    
} else if (playerCard === "rock" && computerCard === "paper") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "rock" && computerCard === "spock") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "rock" && computerCard === "rock") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`);
}

// Paper Scenario for player
if (playerCard === "paper" && computerCard === "rock") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "spock") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "lizzard") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "scissors") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "paper") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
}




function addScore() {

}

