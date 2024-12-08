function playGame(playerMove) {
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

    let result = '';
    const resultParagraph = document.getElementById('result');

    if (playerMove === computerMove) {
        result = 'Tie.';
        resultParagraph.className = 'tie'; 
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        resultParagraph.className = 'win'; 
    } else {
        result = 'You lose.';
        resultParagraph.className = 'loss';
    }

    resultParagraph.textContent = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
}
