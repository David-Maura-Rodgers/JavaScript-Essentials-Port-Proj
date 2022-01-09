
/*
button.addEventListener("click", function() {
    playGame();
}
*/

function playGame() {

    let playerCard = (document.getElementById("player-screen").value);

    const cards = ["rock", "paper", "scissors", "lizzard", "spock"];

    const random = Math.floor(Math.random() * cards.length);
    console.log(random, cards[random]);
    
}

