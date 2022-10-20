/* lets make this fucking project baby */


//SELECTORS SECTION
const rockChoice = document.querySelector('#ROCK');
const paperChoice = document.querySelector('#PAPER');
const scissorsChoice = document.querySelector('#SCISSORS');
const previaMatch = document.querySelector('.previa-match');
const playerScoreMark = document.querySelector('.player-score');
const cpuScoreMark = document.querySelector('.computer-score');
const newGameButton = document.querySelector('#new-game');
const resultsSection = document.querySelector('#results');
const divResult =document.querySelector('.the-ending');
const allButtons = document.getElementsByTagName('button');
const divContainer = document.createElement('div');
const paragraph = document.createElement('p');
let playerCount = 0;
let cpuCount = 0;
let choseWisely;

//adding class to all buttons

for (var i = 0; i < allButtons.length; i++) {    
    allButtons[i].className = 'btn btn-dark';
}


//first step to make function of computerchoice   getComputerChoice

let optionsToChose = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randomChoiceFormula = Math.floor(Math.random() * optionsToChose.length);

    return optionsToChose[randomChoiceFormula];
}

//wirte a function with two parameters, playerselection and computerselection

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

//function endofgame to disable new game button, 

// function endOfGame(){
//     newGameButton.disabled = true;
//     startNewRound = document.createElement('button');
//     startNewRound.textContent = 'Reset';
//     resultsSection.appendChild(startNewRound);
//     startNewRound.addEventListener('click', heroToZero)
// }

//herotozero to restart counting
//pending function to apply function after one winner 

// function heroToZero() {
//     playerCount = 0;
//     playerScoreMark.textContent = playerCount;
//     cpuCount = 0;
//     cpuScoreMark.textContent = cpuCount;
//     startNewRound.parentNode.removeChild(startNewRound);
//     winnerIs.parentNode.removeChild(winnerIs);
//     newGameButton.disabled = false;
//     newGameButton.focus();

// }


/************************************************** */


//let computerSelected = getComputerChoice();

//ADDEVENTLISTENERS FOR BUTTONS
rockChoice.addEventListener('click', () => {
    console.log(optionsToChose[0]);
    choseWisely = optionsToChose[0];
    let computerSelected = getComputerChoice();
    //console.log(singleRound(choseWisely, computerSelected));
    previaMatch.textContent = singleRound(choseWisely, computerSelected);
    
})

paperChoice.addEventListener('click', () => {
    console.log(optionsToChose[1]);
    choseWisely = optionsToChose[1];
    let computerSelected = getComputerChoice();
    //console.log(singleRound(choseWisely, computerSelected));
    previaMatch.textContent = singleRound(choseWisely, computerSelected);
})

scissorsChoice.addEventListener('click', () => {
    console.log(optionsToChose[2]);
    choseWisely = optionsToChose[2];
    let computerSelected = getComputerChoice();
    //console.log(singleRound(choseWisely, computerSelected));
    previaMatch.textContent = singleRound(choseWisely, computerSelected);
})


newGameButton.addEventListener('click', () => {
    console.log("new game called");
    playerScoreMark.textContent = 0;
    playerCount = 0;
    cpuScoreMark.textContent = 0;
    cpuCount = 0;
    newGameButton.disabled = false;
})




/* Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.*/



