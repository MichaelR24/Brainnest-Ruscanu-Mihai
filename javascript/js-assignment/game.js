function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    


    //tie
    if(playerSelection === computerSelection){
        return "It's a tie!";
    }


    //rock and scissors
    if(playerSelection === "rock" && computerSelection === "scissors"){
        return "Computer chose Scissors. You win! Rock beats Scissors";
    }
    else if (computerSelection==="rock" && playerSelection === "scissors"){
        return "Computer chose Rock. You lose! Rock beats Scissors";
    }

    //paper and scissors
    if(playerSelection === "paper" && computerSelection === "scissors"){
        return "Computer chose Scissors. You lose! Scissors beats Paper";
    }
    else if (computerSelection==="paper" && playerSelection === "scissors"){
        return "Computer chose Paper. You win! Scissors beats Paper";
    }

    //rock and paper
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "Computer chose Paper. You lose! Paper beats Rock";
    }
    else if (computerSelection==="rock" && playerSelection === "paper"){
        return "Computer chose Rock. You win! Paper beats Rock";
    }

    //invalid input
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        return "Invalid input!";
    }
        
    }


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let rounds=prompt("How many rounds do you want to play?");

    //check if rounds is a number
    while(Number.isInteger(parseInt(rounds))===false){
        rounds=prompt("Please enter a number!");
    }
   
    //play rounds
    for(let i=1;i<=rounds;i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);

        if(result.includes("win"))
        {
                playerScore++;
        }
        else if(result.includes("lose"))
        {
                    computerScore++;
        }        

        //if the player enters an invalid input, the round is not counted
        if(result==="Invalid input!")
        {
                i--;
        }
    }
    if(playerScore>computerScore)
    {
        console.log("You win the game!");
        console.log("Your score: "+playerScore);
        console.log("Computer's score: "+computerScore);
    }
    else if(playerScore<computerScore)
    {
        console.log("You lose the game!");
        console.log("Your score: "+playerScore);
        console.log("Computer's score: "+computerScore);

    }else{
        console.log("The game is a tie!");
        console.log("Your score: "+playerScore);
        console.log("Computer's score: "+computerScore);
    }
}