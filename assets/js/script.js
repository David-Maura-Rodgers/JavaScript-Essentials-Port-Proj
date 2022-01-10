
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


const cards = ["rock", "paper", "scissors", "lizard", "spock"];

//Have for loop or the above loop to generate a card for player and another for, maybe one of those matrix arrays
//Assign the result of loop for each player
//For now, put it in an alert connect to play button (maybe)
//Have buutons for player card and selection and random loop for compter card

let playerCard = "rock"
let computerCard = "spock"

// Rock Scenario for player
if (playerCard === "rock" && computerCard === "scissors") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`); 
} else if (playerCard === "rock" && computerCard === "lizard") {
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
} else if (playerCard === "paper" && computerCard === "lizard") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "scissors") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "paper" && computerCard === "paper") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
}

//Scissors Scenario for player
if (playerCard === "scissors" && computerCard === "paper") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "scissors" && computerCard === "lizard") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "scissors" && computerCard === "spock") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "scissors" && computerCard === "rock") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "scissors" && computerCard === "scissors") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
}

//Lizard Scenario for player
if (playerCard === "lizard" && computerCard === "spock") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "lizard" && computerCard === "paper") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "lizard" && computerCard === "rock") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "lizard" && computerCard === "scissors") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "lizard" && computerCard === "lizard") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
}

//Spock Scenario for player
if (playerCard === "spock" && computerCard === "scissors") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "spock" && computerCard === "rock") {
    console.log(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
} else if (playerCard === "spock" && computerCard === "lizard") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "spock" && computerCard === "paper") {
    console.log(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
} else if (playerCard === "spock" && computerCard === "spock") {
    console.log(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
}




function addScore() {

}

