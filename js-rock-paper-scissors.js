/* lets make this fucking project baby */


//first step to make function of computerchoice   getComputerChoice

let optionsToChose = ["rock", "paper", "scissors"];


function getComputerChoice(){
    let randomChoiceFormula = Math.floor(Math.random() * optionsToChose.length);

    console.log(optionsToChose[randomChoiceFormula]);
}

getComputerChoice();