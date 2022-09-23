/* lets make this fucking project baby */


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
                console.log("you loose, paper beats rock")
                break;
            case optionsToChose[2]:
                console.log("you win, rock beats scissors")
                break;
            default:
                console.log("Rock solid tie!!");
        }
        
    } else if (playerSelection === optionsToChose[1]){
        switch (computerSelection) {
            case optionsToChose[0]:
                console.log("you win!!, paper beats rock");
                break;
            case optionsToChose[2]:
                console.log("you loose, scissor beats paper");
                break;
            default:
                console.log("it is a tie on paper");            
        }
        
    } else if (playerSelection === optionsToChose[2]){
        switch (computerSelection) {
            case optionsToChose[0]:
                console.log("you loose, rock too solid and destroys scissors");
                break;
            case optionsToChose[1]:
                console.log("you win!!, paper cant take your blade");
                break;
            default:
                console.log("scissor X scissor equals tie");
        }
    }
}


let playerChoiceIs = "Rock"
let computerSelected = getComputerChoice();
singleRound(playerChoiceIs, computerSelected);