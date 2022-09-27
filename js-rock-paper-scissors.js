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
let playerCount = 0;
let cpuCount = 0;




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

//function endofgame to disable new game button, herotozero to restart counting
//pending function to apply function after one winner 

function endOfGame(){
    newGameButton.disabled = true;
    startNewRound = document.createElement('button');
    startNewRound.textContent = 'Reset';
    resultsSection.appendChild(startNewRound);
    startNewRound.addEventListener('click', heroToZero)
}

function heroToZero() {
    playerCount = 0;
    playerScoreMark.textContent = playerCount;
    cpuCount = 0;
    cpuScoreMark.textContent = cpuCount;
    startNewRound.parentNode.removeChild(startNewRound);
    winnerIs.parentNode.removeChild(winnerIs);
    newGameButton.disabled = false;
    newGameButton.focus();

}




/* Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.*/

function game() {

    let choseWisely = (prompt('rock, paper or scissors'));

        if (choseWisely === null){
            return
            } else {
                choseWisely = choseWisely
                .toLowerCase()
                .charAt(0).toUpperCase() + choseWisely.slice(1);
                
            }
        let computerSelected = getComputerChoice();

        if (choseWisely === optionsToChose[0] || choseWisely === optionsToChose[1] || choseWisely === optionsToChose[2]){
            let result = singleRound(choseWisely, computerSelected);
            console.log(result);
            previaMatch.textContent = result;
            if(playerCount === 1){
                endOfGame()
                winnerIs = document.createElement('p');
                winnerIs.textContent = "player 1 wins!!!";
                divResult.appendChild(winnerIs);
                startNewRound.focus();
            } else if (cpuCount === 1){
                endOfGame()
                winnerIs = document.createElement('p');
                winnerIs.textContent = "machines take over the world!!";
                divResult.appendChild(winnerIs);
                startNewRound.focus();
            } else {
                newGameButton.focus()
            }
        } else {
            alert("no an option");
            game()
        }

    }
   

newGameButton.addEventListener('click', game);


game();
