/* lets make this fucking project baby */


//first step to make function of computerchoice   getComputerChoice

let optionsToChose = ["Rock", "Paper", "Scissors"];


function getComputerChoice(){
    let randomChoiceFormula = Math.floor(Math.random() * optionsToChose.length);

    return optionsToChose[randomChoiceFormula];
}

getComputerChoice();

//wirte a function with two parameters, playerselection and computerselection

let playerChoiceIs = "Rock"
let computerSelected = getComputerChoice();

function singleRound(playerSelection, computerSelection){
    for (let i = 0; i < optionsToChose.length; i++){
        if (playerSelection === optionsToChose[i]){
            console.log("valid answer", `computer chose ${computerSelection}`)
        } 
    }
} 

singleRound(playerChoiceIs, computerSelected);