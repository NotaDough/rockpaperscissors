function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice(choice) {
    let usrChoice = prompt("Please choose between Rock, Paper, and Scissors:", choice);
    return usrChoice;
}

let humanScore = 0;
let computerScore = 0;
const playRound = 5;
let counter = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let usr = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();
        console.log("You selected: ", usr);
        console.log("The computer selected: ", computer)
        if(usr === "rock" && computer === "scissors" || usr === "paper" && computer === "rock" || usr === "scissors" && computer === "paper") {
            console.log("Congratulations! You win this round.");
            humanScore++;
        } else if (usr === "rock" && computer === "rock" || usr === "paper" && computer === "paper" || usr === "scissors" && computer === "scissors") {
            console.log("Its a draw.");
        }
        else {
            console.log("You lose! Try again.");
            computerScore++;
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    return playRound(humanSelection, computerSelection);
}

do {
    playGame();
    counter++;
    console.log("Your current points are: ", humanScore);
    console.log("The computer's points are: ", computerScore);

    // if(counter > playRound) {
    //     console.log("Your current points are: ", humanScore);
    //     console.log("The computer's points are: ", computerScore);
    //     if(humanScore > computerScore) {
    //         console.log("Congratulations! You win!");
    //     }
    //     else if(computerScore > humanScore) {
    //         console.log("Better luck next time. You lose!");
    //     } else {
    //         console.log("Its a draw");
    //     }
        
    //     break;
    // }
    
} while (counter < playRound);


