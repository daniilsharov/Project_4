const score = {
    wins: 0,
    losses: 0,
    ties: 0,
};

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

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    resultParagraph.textContent = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    updateScore();
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    const resultParagraph = document.getElementById('result');
    resultParagraph.textContent = "Score has reset, pick a move!";
    resultParagraph.className = '';

    updateScore();
}

function updateScore() {
    document.getElementById('wins').textContent = `Wins: ${score.wins}`;
    document.getElementById('losses').textContent = `Losses: ${score.losses}`;
    document.getElementById('ties').textContent = `Ties: ${score.ties}`;
}
