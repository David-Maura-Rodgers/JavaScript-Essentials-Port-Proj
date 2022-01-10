
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
let computerCard = "scissors"

if (playerCard === "rock" && computerCard === "scissors" || "lizzard") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "rock" && computerCard === "rock") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`);
} else if (playerCard === "rock" && computerCard === "paper" || "spock") {
    console.log(`${playerCard} loses to ${computerCard}. Computer = Compter gets 1 point.`);
}




function addScore() {

}

