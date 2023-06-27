let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button')

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('choose: rock paper or scissors?')
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

function getComputerChoice () {
    const computerThrow = Math.floor(Math.random() * 3);
    switch (computerThrow) {
        case 0:
            return 'rock';
        case 1:
            return 'scissors';
        case 2:
            return 'paper';
    }   
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'player'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'player'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'player'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'computer'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'computer'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'computer'
    }
}
const computerSelection = getComputerChoice()

game() 
