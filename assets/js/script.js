document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "play") {
				playGame();
			} 
		});
    }

//Have for loop or the above loop to generate a card for player and another for, maybe one of those matrix arrays
//Assign the result of loop for each player
//For now, put it in an alert connect to play button (maybe) 
//Have buutons for player card and selection and random loop for compter card

function playGame(playerCard) {

    let playerCard = document.getElementsByTagName('button'); 
    
    const cards = ["rock", "paper", "scissors", "lizard", "spock"];

    let computerCard = Math.floor(Math.random() * cards.length);
    
    // Paper Scenario for player
    if (playerCard === "rock" && computerCard === "scissors") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`); 
    } else if (playerCard === "rock" && computerCard === "lizard") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);    
    } else if (playerCard === "rock" && computerCard === "paper") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "rock" && computerCard === "spock") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "rock" && computerCard === "rock") {
        alert(`${playerCard} draws with ${computerCard}. No points awarded to either player.`);
    }
    
    // Paper Scenario for player
    if (playerCard === "paper" && computerCard === "rock") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "paper" && computerCard === "spock") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "paper" && computerCard === "lizard") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "paper" && computerCard === "scissors") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "paper" && computerCard === "paper") {
        alert(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
    }
    
    // Scissors Scenario for player
    if (playerCard === "scissors" && computerCard === "paper") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "scissors" && computerCard === "lizard") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "scissors" && computerCard === "spock") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "scissors" && computerCard === "rock") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "scissors" && computerCard === "scissors") {
        alert(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
    }
    
    // Lizard Scenario for player
    if (playerCard === "lizard" && computerCard === "spock") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "lizard" && computerCard === "paper") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "lizard" && computerCard === "rock") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "lizard" && computerCard === "scissors") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "lizard" && computerCard === "lizard") {
        alert(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
    }
    
    // Spock Scenario for player
    if (playerCard === "spock" && computerCard === "scissors") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "spock" && computerCard === "rock") {
        alert(`${playerCard} beats ${computerCard}. Player gets 1 point.`);
    } else if (playerCard === "spock" && computerCard === "lizard") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "spock" && computerCard === "paper") {
        alert(`${playerCard} loses to ${computerCard}. Computer gets 1 point.`);
    } else if (playerCard === "spock" && computerCard === "spock") {
        alert(`${playerCard} draws with ${computerCard}. No points awarded to either player.`); 
    }
 
}


function addScore() {

}

});
