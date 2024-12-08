function playGame(playerMove) {
    // Generate a random move for the computer
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    console.log(`Computer's move: ${computerMove}`);

    // Determine the result of the game
    let result = '';
    if (playerMove === computerMove) {
        result = 'Tie.';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose.';
    }

    // Display the result
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
