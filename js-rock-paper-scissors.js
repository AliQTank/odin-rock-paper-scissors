//SELECTORS

const allButtons = document.getElementsByTagName('button');
const buttonsOfGame = document.querySelectorAll('#selectors button');
const newGameButton = document.querySelector('#new-game');
const rockChoice = document.querySelector('#ROCK');
const paperChoice = document.querySelector('#PAPER');
const scissorsChoice = document.querySelector('#SCISSORS');
const previaMatch = document.querySelector('.previa-match');
const playerScoreMark = document.querySelector('.player-score');
const cpuScoreMark = document.querySelector('.computer-score');
const playChooses = document.querySelector('.player span');
const cpuChooses = document.querySelector('.computer span');
const divResult = document.querySelector('.the-ending');
let playerCount = 0;
let cpuCount = 0;
let choseWisely;
let optionsToChose = ["Rock", "Paper", "Scissors"];

for (button of allButtons) {
    button.className = 'btn btn-dark';
}


function getComputerChoice(){
    let randomChoiceFormula = Math.floor(Math.random() * optionsToChose.length);
    return optionsToChose[randomChoiceFormula];
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection === optionsToChose[0] ){
        switch (computerSelection) {
            case optionsToChose[1]:
                cpuCount++
                cpuScoreMark.textContent = cpuCount;
                return "you loose, paper beats rock";
                break;
            case optionsToChose[2]:
                playerCount++
                playerScoreMark.textContent = playerCount;
                return "you win, rock beats scissors";
                break;
            default:
                return "Rock solid tie!!";
        }
        
    } else if (playerSelection === optionsToChose[1]){
        switch (computerSelection) {
            case optionsToChose[0]:
                playerCount++
                playerScoreMark.textContent = playerCount;
                return "you win!!, paper beats rock";
                break;
            case optionsToChose[2]:
                cpuCount++
                cpuScoreMark.textContent = cpuCount;
                return "you loose, scissor beats paper";
                break;
            default:
                return "it is a tie on paper";            
        }
        
    } else if (playerSelection === optionsToChose[2]){
        switch (computerSelection) {
            case optionsToChose[0]:
                cpuCount++
                cpuScoreMark.textContent = cpuCount;
                return "you loose, rock too solid and destroys scissors";
                break;
            case optionsToChose[1]:
                playerCount++
                playerScoreMark.textContent = playerCount;
                return "you win!!, paper cant take your blade";
                break;
            default:
                return "scissor X scissor equals tie";
        }
    }
}

function newGameFunction() {
    console.log("new game called");
    playerScoreMark.textContent = 0;
    playerCount = 0;
    cpuScoreMark.textContent = 0;
    cpuCount = 0;
    newGameButton.disabled = true;
    previaMatch.textContent = "";
    playChooses.textContent = "";
    cpuChooses.textContent = "";
    winnerIs.parentNode.removeChild(winnerIs);

    for (button of buttonsOfGame) {
        button.style.display ='inline';
        button.disabled = false;
    }

}

function chosenRock() {
    console.log(optionsToChose[0]);
    choseWisely = optionsToChose[0];
    dry001();
}

function chosenpaper() {
    console.log(optionsToChose[1]);
    choseWisely = optionsToChose[1];
    dry001();
}

function chosenScissor() {
    console.log(optionsToChose[2]);
    choseWisely = optionsToChose[2];
    dry001();
}

function dry001() {
    let computerSelected = getComputerChoice();
    previaMatch.textContent = singleRound(choseWisely, computerSelected);
    playChooses.textContent = choseWisely;
    cpuChooses.textContent = computerSelected;
    newGameButton.disabled = false;
    console.log(playerCount);
    console.log(cpuCount);
    if (playerCount === 2) {
        winnerIs = document.createElement('p');
        winnerIs.textContent = "player 1 wins!!!";
        divResult.appendChild(winnerIs);
        for (button of buttonsOfGame) {
            button.disabled = true;
        }
        console.log("gay mover");
    } else if (cpuCount === 2) {
        winnerIs = document.createElement('p');
        winnerIs.textContent = "machines take over the world!!";
        divResult.appendChild(winnerIs);
        for (button of buttonsOfGame) {
            button.disabled = true;
        }
        console.log("gay mover");
    } else {
        console.log("still playing");
    }
}


//ADD EVENT LISTENERS   

rockChoice.addEventListener('click', chosenRock);
paperChoice.addEventListener('click', chosenpaper);
scissorsChoice.addEventListener('click', chosenScissor);
newGameButton.addEventListener('click', newGameFunction);