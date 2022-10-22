function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
    
rounds=prompt("How many rounds do you want to play?");

//check if rounds is a number
while(Number.isInteger(parseInt(rounds))===false){
    rounds=prompt("Please enter a number!");
}


let playerScore = 0;
let computerScore = 0;
let i=1;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
    
});

function playRound(playerSelection){

    let computerSelection = computerPlay();
    let status=document.getElementById("status");
    let resultWindow=document.getElementById("result-window");
    let score=document.getElementById("score");
    let final=document.getElementById("final");

    if (playerSelection == computerSelection){
        resultWindow.textContent = "It's a tie!";
        status.textContent = "You both chose " + playerSelection + ".";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        resultWindow.textContent = "You win!";
        status.textContent = "Rock beats scissors.";
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        resultWindow.textContent = "You lose!";
        status.textContent = "Paper beats rock.";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        resultWindow.textContent = "You win!";
        status.textContent = "Paper beats rock.";
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        resultWindow.textContent = "You lose!";
        status.textContent = "Scissors beats paper.";
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        resultWindow.textContent = "You win!";
        status.textContent = "Scissors beats paper.";
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        resultWindow.textContent = "You lose!";
        status.textContent = "Rock beats scissors.";
        computerScore++;
    }

    score.textContent = "Player: " + playerScore + " Computer: " + computerScore;

    if (i == rounds && playerScore > computerScore){
        resultWindow.textContent = "You win the game!";
        final.textContent = "Refresh the page to play again.";

    }
    else if (i == rounds && playerScore < computerScore){
        resultWindow.textContent = "You lose the game!";
        final.textContent = "Refresh the page to play again.";
    }
    else if (i == rounds && playerScore == computerScore){
        resultWindow.textContent = "It's a tie!";
        final.textContent = "Refresh the page to play again.";
    }
    i++;
    buttons.forEach((button) => {
        if(i===parseInt(rounds)+1){
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
    });
        
}