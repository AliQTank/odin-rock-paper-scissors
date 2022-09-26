/* lets make this fucking project baby */


//SELECTORS SECTION
const rockChoice = document.querySelector('#ROCK');
const paperChoice = document.querySelector('#PAPER');
const scissorsChoice = document.querySelector('#SCISSORS');
const previaMatch = document.querySelector('.previa-match');
const playerScoreMark = document.querySelector('.player-score');
const cpuScoreMark = document.querySelector('.computer-score');




//first step to make function of computerchoice   getComputerChoice

let optionsToChose = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let randomChoiceFormula = Math.floor(Math.random() * optionsToChose.length);

    return optionsToChose[randomChoiceFormula];
}

//getComputerChoice();

//wirte a function with two parameters, playerselection and computerselection

function singleRound(playerSelection, computerSelection){
    if (playerSelection === optionsToChose[0] ){
        switch (computerSelection) {
            case optionsToChose[1]:
                return "you loose, paper beats rock";
                break;
            case optionsToChose[2]:
                return "you win, rock beats scissors";
                break;
            default:
                return "Rock solid tie!!";
        }
        
    } else if (playerSelection === optionsToChose[1]){
        switch (computerSelection) {
            case optionsToChose[0]:
                return "you win!!, paper beats rock";
                break;
            case optionsToChose[2]:
                return "you loose, scissor beats paper";
                break;
            default:
                return "it is a tie on paper";            
        }
        
    } else if (playerSelection === optionsToChose[2]){
        switch (computerSelection) {
            case optionsToChose[0]:
                return "you loose, rock too solid and destroys scissors";
                break;
            case optionsToChose[1]:
                return "you win!!, paper cant take your blade";
                break;
            default:
                return "scissor X scissor equals tie";
        }
    }
}


/* Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.*/

function game() {
    let choseWisely = (prompt('rock, paper or scissors')).toLowerCase();
    choseWisely = choseWisely.charAt(0).toUpperCase() + choseWisely.slice(1);

    let computerSelected = getComputerChoice();

    if (choseWisely === optionsToChose[0] || choseWisely === optionsToChose[1] || choseWisely === optionsToChose[2]){
        let result = singleRound(choseWisely, computerSelected);
        console.log(result);
        previaMatch.textContent = result;
    } else {
        alert("no an option");
        game()
    }
}

game();

